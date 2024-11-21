import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Package from '@/lib/models/package';
import { verifyAuth } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const provider = searchParams.get('provider');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    const query: any = { active: true };
    
    if (type) query.type = type;
    if (provider) query.providerId = provider;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }

    const skip = (page - 1) * limit;
    
    const packages = await Package.find(query)
      .populate('providerId', 'name logo')
      .skip(skip)
      .limit(limit)
      .sort({ price: 1 });

    const total = await Package.countDocuments(query);

    return NextResponse.json({
      packages,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
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
    const newPackage = await Package.create(body);
    
    return NextResponse.json(newPackage, { status: 201 });
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