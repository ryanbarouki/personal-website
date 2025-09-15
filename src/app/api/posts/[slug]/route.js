import { getPostBySlug } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const post = getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
