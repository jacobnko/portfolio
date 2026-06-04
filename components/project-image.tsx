"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * 이미지가 아직 없으면(Phase 7 전) gradient placeholder 로 graceful degrade.
 * 파일이 추가되면 자동으로 실제 이미지가 표시된다.
 */
export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-lg border border-border bg-gradient-to-br from-secondary to-background">
        <span className="font-mono text-xs text-muted-foreground">{alt}</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-secondary">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
