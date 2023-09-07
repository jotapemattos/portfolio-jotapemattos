import { cn } from '@/@lib/utils';
import { ToolsProps, tools } from '@/data/tools';
import { Tech, getHoverColor } from '@/utils/functions/selectHoverColor';
import Image from 'next/image';

const ToolsCards = () => {
  return (
    <>
      {tools.map((tool: ToolsProps, i) => (
        <div
          key={i}
          className="w-56 h-16 group rounded-lg bg-background backdrop-blur-md flex items-center gap-4 p-4 overflow-hidden border-t border-r border-primary/10 drop-shadow-[0_0_4px_rgba(49,49,49,0.2)]"
        >
          <span
            className={cn(
              'fixed top-0 right-3 h-4 w-12 rounded-3xl bg-transparent opacity-90 blur-2xl',
              getHoverColor(tool.name.toLowerCase() as Tech)
            )}
          />
          <span className="w-6 h-6 group">
            <Image
              src={tool.image}
              alt={tool.name + 'logo'}
              className="grayscale group-hover:grayscale-0"
            />
          </span>
          <p className="text-xs">{tool.name}</p>
        </div>
      ))}
    </>
  );
};

export default ToolsCards;
