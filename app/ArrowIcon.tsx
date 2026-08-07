type ArrowIconProps = { direction?: "up-right" | "down" };

export function ArrowIcon({ direction = "up-right" }: ArrowIconProps) {
  return <span className={`icon-arrow icon-arrow-${direction}`} aria-hidden="true" />;
}
