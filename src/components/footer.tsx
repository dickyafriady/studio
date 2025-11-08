export function Footer() {
    return (
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Digital Canvas. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
}
