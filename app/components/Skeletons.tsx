// ============================================
// COMBINED SKELETONS - All loading states in one file
// ============================================

// ----- LOADING SKELETON (Generic) -----
export function LoadingSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <div className="skeleton h-12 w-3/4 mx-auto rounded" />
      <div className="skeleton h-8 w-1/2 mx-auto rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="skeleton h-32 rounded" />
        <div className="skeleton h-32 rounded" />
        <div className="skeleton h-32 rounded" />
      </div>
      <div className="skeleton h-64 w-full rounded" />
    </div>
  );
}

// ----- HOME SKELETON (Homepage) -----
export function HomeSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="skeleton h-8 w-48 rounded" />
        <div className="skeleton h-16 w-64 rounded" />
        <div className="skeleton h-8 w-32 rounded" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="skeleton h-64 rounded-xl" />
        <div className="skeleton h-64 rounded-xl" />
        <div className="skeleton h-64 rounded-xl" />
      </div>

      {/* Map Section */}
      <div className="skeleton h-96 rounded-xl" />

      {/* Recent Scans */}
      <div className="skeleton h-32 rounded-xl" />
    </div>
  );
}

// ----- BULK IP LOOKUP SKELETON -----
export function BulkLookupSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="skeleton h-12 w-64 mx-auto rounded" />
      <div className="skeleton h-8 w-48 mx-auto rounded" />
      <div className="skeleton h-48 w-full rounded-xl" />
      <div className="flex gap-3">
        <div className="skeleton h-10 w-24 rounded" />
        <div className="skeleton h-10 w-24 rounded" />
      </div>
    </div>
  );
}

// ----- SPEED TEST SKELETON -----
export function SpeedTestSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center">
        <div className="skeleton h-12 w-48 mx-auto rounded" />
        <div className="skeleton h-6 w-64 mx-auto rounded mt-2" />
      </div>
      <div className="flex justify-center">
        <div className="skeleton h-44 w-44 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="skeleton h-48 w-full rounded" />
        <div className="skeleton h-48 w-full rounded" />
        <div className="skeleton h-48 w-full rounded" />
      </div>
    </div>
  );
}

// ----- DNS LEAK SKELETON -----
export function DNSLeakSkeleton() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center">
        <div className="skeleton h-12 w-48 mx-auto rounded" />
        <div className="skeleton h-6 w-64 mx-auto rounded mt-2" />
      </div>
      <div className="skeleton h-64 w-full rounded-xl" />
    </div>
  );
}

// ----- TOOL PAGE SKELETON (Generic for any tool page) -----
export function ToolPageSkeleton() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="skeleton h-16 w-16 rounded-full" />
          <div>
            <div className="skeleton h-10 w-48 rounded" />
            <div className="skeleton h-5 w-64 rounded mt-1" />
          </div>
        </div>
        {/* Ad Banner */}
        <div className="skeleton h-[90px] w-full rounded-xl mb-8" />
        {/* Content */}
        <div className="skeleton h-96 w-full rounded-2xl" />
      </div>
    </div>
  );
}