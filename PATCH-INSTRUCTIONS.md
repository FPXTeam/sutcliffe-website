# Sutcliffe Trading Mobile Navigation Patch

Copy the `app` folder into the root of the existing repository and allow the files to merge/replace.

Changed files:
- `app/layout.tsx`
- `app/components/MobileNavigation.tsx`
- `app/mobile-navigation.css`

Fixes:
- Restores full navigation on screens 900px wide and below.
- Adds a mobile Menu / Close control.
- Includes Home, About, Timber, Sustainability, Contact and Request timber.
- Keeps desktop navigation unchanged.
- Closes automatically after route changes.
- Supports Escape key and `aria-expanded` for accessibility.
