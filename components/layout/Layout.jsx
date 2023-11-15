export function Wrapper({ children , className, ...props}) {
    return <div className={`w-full px-2 py-2 xl:max-w-page md:px-8 md:py-8 lg:py-9 lg:px-9 xl:py-20 xl:px-20 mx-auto relative ${className}`} {...props}>{children}</div>;
  }