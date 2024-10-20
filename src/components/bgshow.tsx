import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Copy } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const themes = [
  { name: 'Gradient', type: 'gradient' },
  { name: 'Dots', type: 'dots' },
  { name: 'Lines', type: 'lines' },
  { name: 'Waves', type: 'waves' },
];

export default function BackgroundShowcase() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [secondaryColor, setSecondaryColor] = useState('#ef4444');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const getBackgroundStyle = (theme: (typeof themes)[0]) => {
    switch (theme.type) {
      case 'gradient':
        return {
          background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
        };
      case 'dots':
        return {
          backgroundColor: primaryColor,
          backgroundImage: `radial-gradient(${secondaryColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        };
      case 'lines':
        return {
          backgroundColor: primaryColor,
          backgroundImage: `linear-gradient(${secondaryColor} 1px, transparent 1px)`,
          backgroundSize: '100% 20px',
        };
      case 'waves':
        return {
          backgroundColor: primaryColor,
          backgroundImage: `
            radial-gradient(at 47% 33%, ${secondaryColor} 0, transparent 59%), 
            radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%)
          `,
        };
      default:
        return {};
    }
  };

  const getBackgroundStyleString = (theme: (typeof themes)[0]) => {
    const style = getBackgroundStyle(theme);
    return Object.entries(style)
      .map(
        ([key, value]) =>
          `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
      )
      .join(' ');
  };

  const handleCopyCSS = (theme: (typeof themes)[0]) => {
    const css = getBackgroundStyleString(theme);
    navigator.clipboard.writeText(css);
    toast.success('CSS copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Background Theme Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <Card key={theme.type} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{theme.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-48 rounded-md"
                style={getBackgroundStyle(theme)}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Select
                onValueChange={(value) =>
                  setSelectedTheme(
                    themes.find((t) => t.type === value) || themes[0]
                  )
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  {themes.map((t) => (
                    <SelectItem key={t.type} value={t.type}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => handleCopyCSS(theme)}>
                <Copy className="mr-2 h-4 w-4" /> Copy CSS
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="fixed bottom-4 right-4 flex space-x-4">
        <Button onClick={() => setShowColorPicker(!showColorPicker)}>
          {showColorPicker ? 'Hide' : 'Show'} Color Picker
        </Button>
        {showColorPicker && (
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h3 className="text-sm font-semibold mb-2">Primary Color</h3>
            <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
            <h3 className="text-sm font-semibold mt-4 mb-2">Secondary Color</h3>
            <HexColorPicker
              color={secondaryColor}
              onChange={setSecondaryColor}
            />
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}
