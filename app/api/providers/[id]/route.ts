import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Provider from '@/lib/models/provider';
import { verifyAuth } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const provider = await Provider.findById(params.id);
    
    if (!provider) {
      return NextResponse.json(
        { error: 'Provider not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(provider);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await verifyAuth(req);
    await connectDB();

    const body = await req.json();
    const updatedProvider = await Provider.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedProvider) {
      return NextResponse.json(
        { error: 'Provider not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProvider);
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

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await verifyAuth(req);
    await connectDB();

    const deletedProvider = await Provider.findByIdAndUpdate(
      params.id,
      { active: false },
      { new: true }
    );

    if (!deletedProvider) {
      return NextResponse.json(
        { error: 'Provider not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Provider deleted successfully' });
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