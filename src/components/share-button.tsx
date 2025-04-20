"use client";

import { Button} from '@/components/ui/button';
import { toast } from 'sonner';

interface ShareButtonProps  {
    children: React.ReactNode;
    title: string;
    className?: string;
    url: string;
}

export default function ShareButton({ title, url, ...props }: ShareButtonProps) {
    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title,
                    url,
                });
            } else {
                await navigator.clipboard.writeText(url);
                toast.success('Link in die Zwischenablage kopiert!');
            }
        } catch (err) {
            toast.error('Teilen fehlgeschlagen');
        }
    };

    return (
        <Button onClick={handleShare} {...props}>
            {props.children}
        </Button>
    );
}