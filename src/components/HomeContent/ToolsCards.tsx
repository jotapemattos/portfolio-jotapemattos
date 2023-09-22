import { cn } from '@/@lib/utils';
import { ToolsProps } from '@/data/tools';
import { Tech, getHoverColor } from '@/utils/functions/selectHoverColor';
import Image from 'next/image';

interface ToolCardProps {
  tool: ToolsProps;
  index: number;
}

const ToolsCards = ({ tool, index }: ToolCardProps) => {
  return (
    <div
      key={index}
      className="w-fit h-fit group rounded-lg bg-background backdrop-blur-md flex items-center gap-4 px-4 py-2 overflow-hidden border-t border-r border-primary/10 drop-shadow-[0_0_4px_rgba(49,49,49,0.2)]"
    >
      <span
        className={cn(
          'fixed top-0 right-3 h-4 w-12 rounded-3xl bg-transparent opacity-90 blur-2xl',
          getHoverColor(tool.name.toLowerCase() as Tech)
        )}
      />
      <span className="w-5 h-5 group">
        <Image
          src={tool.image}
          alt={tool.name + 'logo'}
          className="grayscale group-hover:grayscale-0"
        />
      </span>
      <p className="text-sm">{tool.name}</p>
    </div>
  );
};

export default ToolsCards;
