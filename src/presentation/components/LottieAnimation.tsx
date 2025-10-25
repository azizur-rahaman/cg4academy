'use client';

import Lottie from 'lottie-react';
import { FC } from 'react';

interface LottieAnimationProps {
  animationData: unknown;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  className,
  loop = true,
  autoplay = true,
  style,
}) => {
  return (
    <Lottie
      animationData={animationData}
      className={className}
      loop={loop}
      autoPlay={autoplay}
      style={style}
    />
  );
};