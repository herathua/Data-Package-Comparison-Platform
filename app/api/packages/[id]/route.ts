import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Package from '@/lib/models/package';
import { verifyAuth } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const pkg = await Package.findById(params.id)
      .populate('providerId', 'name logo contactEmail website');
    
    if (!pkg) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(pkg);
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
    const updatedPackage = await Package.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedPackage) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedPackage);
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

    const deletedPackage = await Package.findByIdAndUpdate(
      params.id,
      { active: false },
      { new: true }
    );

    if (!deletedPackage) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Package deleted successfully' });
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