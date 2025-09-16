import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

export function getAllPosts() {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...matterResult.data,
      };
    })
    .filter((post) => {
      // Filter out draft posts in production
      // In development, show all posts including drafts
      if (process.env.NODE_ENV === 'production') {
        return !post.draft;
      }
      return true;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Check if this is a draft post and we're in production
  if (process.env.NODE_ENV === 'production' && matterResult.data.draft) {
    return null;
  }

  return {
    slug,
    content: matterResult.content,
    ...matterResult.data,
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      
      // Read the file to check if it's a draft
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      
      return {
        slug,
        draft: matterResult.data.draft || false,
      };
    })
    .filter((post) => {
      // Filter out draft posts in production
      if (process.env.NODE_ENV === 'production') {
        return !post.draft;
      }
      return true;
    })
    .map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    });
}
