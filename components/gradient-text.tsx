interface GradientTextProps {
  message: string;
}

export function GradientText({ message }: GradientTextProps) {
  return <h2 className="gradientText">{message}</h2>;
}
