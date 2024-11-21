import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Provider from '@/lib/models/provider';
import { verifyAuth } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    await connectDB();
    
    const providers = await Provider.find({ active: true })
      .select('name logo website');
    
    return NextResponse.json(providers);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await verifyAuth(req);
    await connectDB();

    const body = await req.json();
    const newProvider = await Provider.create(body);
    
    return NextResponse.json(newProvider, { status: 201 });
  } catch (error: any) {
    if (error.message === 'Not authorized') {
      return NextResponse.json(
        { error: 'Not authorized' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}