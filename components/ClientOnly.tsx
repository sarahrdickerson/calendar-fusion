"use client";

/**
 * Use to fix hydration mismatch errors， wrap problematic 
 * components that use client-side only code
 */

interface ClientOnlyProps {
    children: React.ReactNode;
}
import { useState, useEffect } from 'react';
const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    };

  return (
    <>{children}</>
  );
}

export default ClientOnly