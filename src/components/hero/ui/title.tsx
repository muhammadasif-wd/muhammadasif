import { AuroraText } from '@/components/ui/aurora-text';
import { H1 } from '@/utils/typography/h1';
import { title } from '../data';

export function Title() {
  function parseForHighlightedWords(text: string) {
    const wordsAndSpaces = text.split(/(\s+)/);

    return wordsAndSpaces.map((chunk, index) => {
      const isHighlighted = title.highlight
        .map((word) => word.toLowerCase())
        .includes(chunk.trim().toLowerCase());

      return (
        <span
          key={index}
          className={`${isHighlighted ? 'text-white drop-shadow-[0px_0px_3px_white]' : ''}`}
        >
          {chunk}
        </span>
      );
    });
  }
  return (
    <div className="w-full grow basis-1">
      <H1>
        <AuroraText>{title.glowText}</AuroraText>
      </H1>
      <div className="mt-8 text-center text-3xl font-light text-muted-foreground">
        {parseForHighlightedWords(title.subTitle)}
      </div>
    </div>
  );
}
