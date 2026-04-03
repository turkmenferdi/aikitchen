import React from 'react';
import { Button } from './Button';

interface CTABannerProps {
  heading: string;
  description?: string;
  primaryCTA: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCTA?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
}

export function CTABanner({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
}: CTABannerProps) {
  return (
    <div className="relative bg-gradient-to-br from-accent-teal/95 to-accent-teal-dark/95 text-white py-16 md:py-24 rounded-lg overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{heading}</h2>
        {description && <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">{description}</p>}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA.href ? (
            <a href={primaryCTA.href}>
              <Button variant="secondary" size="lg">
                {primaryCTA.text}
              </Button>
            </a>
          ) : (
            <Button variant="secondary" size="lg" onClick={primaryCTA.onClick}>
              {primaryCTA.text}
            </Button>
          )}

          {secondaryCTA && (
            <>
              {secondaryCTA.href ? (
                <a href={secondaryCTA.href}>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent-teal">
                    {secondaryCTA.text}
                  </Button>
                </a>
              ) : (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-accent-teal"
                  onClick={secondaryCTA.onClick}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
