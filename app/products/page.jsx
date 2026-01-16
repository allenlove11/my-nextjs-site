// app/products/page.jsx
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProductsPage() {
  const router = useRouter();
  
  useEffect(() => {
    // 默认重定向到第一个Tab
    router.push('/products/panda-mn228');
  }, [router]);
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Loading products...</h2>
        </div>
      </div>
    </div>
  );
}