import { useState } from 'react';
import toast from 'react-hot-toast';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type BackgroundPattern } from '@/types/background';

interface BackgroundCardProps {
  pattern: BackgroundPattern;
}

export function BackgroundCard({ pattern }: BackgroundCardProps) {
  const [copied, setCopied] = useState(false);
  const PatternComponent = pattern.component;

  const copyToClipboard = async () => {
    try {
      const element = document.querySelector(
        `[data-pattern-id="${pattern.id}"]`
      );
      if (element) {
        await navigator.clipboard.writeText(element.outerHTML);
        setCopied(true);
        toast.success('Copied to clipboard!');
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <Card className="overflow-hidden">
      <div data-pattern-id={pattern.id}>
        <PatternComponent className="h-48 w-full transition-all duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{pattern.name}</h3>
            <p className="text-sm text-muted-foreground">
              {pattern.description}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className={copied ? 'text-green-500' : ''}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
