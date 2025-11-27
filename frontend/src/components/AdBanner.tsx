"use client";

interface AdBannerProps {
  slot: string;
}

export default function AdBanner({ slot }: AdBannerProps) {
  // This is a placeholder for ad integration
  // Replace with actual Google AdSense code when ready

  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <p className="text-gray-500 text-sm">
        📢 Ad Space ({slot})
      </p>
      <p className="text-gray-400 text-xs mt-2">
        Add your Google AdSense code here
      </p>
    </div>
  );
}
