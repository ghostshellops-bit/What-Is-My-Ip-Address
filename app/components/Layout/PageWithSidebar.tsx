import Banner728x90 from '@/components/Ads/Banner728x90';
import Banner300x250 from '@/components/Ads/Banner300x250';
import Banner160x300 from '@/components/Ads/Banner160x300';
import NativeBanner from '@/components/Ads/NativeBanner';

interface PageWithSidebarProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function PageWithSidebar({ children, title, description }: PageWithSidebarProps) {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-ghost-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ghost-cyan/50 shadow-glow-cyan">
            <Image src="/images/logo.png" alt="What Is My IP" fill className="object-contain p-2" />
          </div>
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-ghost-cyan">{title}</h1>
            <p className="text-gray-400 font-mono text-sm">{description}</p>
          </div>
        </div>

        {/* Top Banner */}
        <div className="mb-6">
          <Banner728x90 />
        </div>

        {/* Main Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {children}
            
            {/* Native Banner inside content */}
            <div className="my-6">
              <NativeBanner />
            </div>
            
            {/* 300x250 Banner */}
            <div className="my-6 flex justify-center">
              <Banner300x250 />
            </div>
          </div>

          {/* Sidebar with Skyscraper */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex justify-center">
                <Banner160x300 />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-6">
          <Banner728x90 />
        </div>

      </div>
    </main>
  );
}