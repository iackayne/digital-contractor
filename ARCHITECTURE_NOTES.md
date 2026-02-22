# Architecture & Design Notes

## Design Philosophy

### Minimalist/Neutral Aesthetic
- **Color Constraint**: Limited palette (5 colors max) ensures cohesive, professional appearance
- **Whitespace**: Generous spacing between sections creates visual hierarchy
- **Typography**: Single font family with varied weights for hierarchy
- **No Decorative Elements**: Focus on functionality and content clarity

### CSS Variables (Design Tokens)
Defined in `styles.scss`:
```scss
--color-background: #fafafa
--color-surface: #ffffff
--color-text-primary: #1f2937
--color-text-secondary: #6b7280
--color-border: #e5e7eb
--color-primary: #2563eb
--color-primary-dark: #1d4ed8
```

## Architectural Patterns

### 1. Standalone Components
All components use Angular's standalone API:
```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `...`,
  styleUrl: './home.scss'
})
```

**Benefits**:
- No NgModule needed
- Explicit dependency management
- Tree-shakeable
- Easier to understand component dependencies

### 2. Reactive Forms
Service-Request and Calendar pages use `ReactiveFormsModule`:
```typescript
this.form = this.fb.group({
  projectName: ['', Validators.required],
  // ...
});
```

**Benefits**:
- Type-safe form handling
- Better testability
- Complex validation rules
- Programmatic form control

### 3. Signals for State Management
Modern Angular signals for state in components:
```typescript
selectedFrameworks = signal<string[]>([]);
bookingConfirmed = signal(false);
```

**Benefits**:
- Fine-grained reactivity
- No subscription management in templates
- Clean, readable state declarations
- Automatic change detection optimization

## Component Responsibilities

### Pages
Each page is a self-contained feature:
- **Home**: Marketing/onboarding content
- **Service-Request**: Complex multi-tab form for job matrix creation
- **Dashboard**: Data display and monitoring
- **About**: Static content showcase
- **Calendar**: Booking workflow

### Shared Components
Reusable layout components:
- **Navbar**: Navigation and user menu
- **Footer**: Links and branding

## Styling Strategy

### SCSS Architecture
Each component has its own `scss` file with:
- Component-specific variables
- Nested selectors for BEM-like organization
- Responsive breakpoints using Media Queries
- Material color integration

### Responsive Breakpoints
```scss
// Mobile first
// Tablet: 768px+
// Desktop: 1024px+
// Large: 1440px+
```

### CSS Grid vs Flexbox
- **Flexbox**: Primary layout method for most components
- **CSS Grid**: Used for complex 2D layouts (dashboard grid, talent cards grid)

## Form Handling

### Service-Request Form
- **Tabs**: Material tabs organize form into 4 logical sections
- **Validation**: Built-in validators for required fields
- **Chips**: Selected frameworks/payment terms displayed as removable chips
- **Custom Toggle**: Framework/payment term selection via button toggle

### Calendar Form
- **Datepicker**: Material DatePicker for date selection
- **Dropdown**: Material Select for call type and time
- **Confirmation**: Two-state component (form/confirmation)

## Data Flow

### Component Data
Components use:
1. **Signal for local state** (selectedFrameworks, bookingConfirmed)
2. **FormGroup for form state** (reactive forms)
3. **Property for static data** (talent array, project list)

**No global state** (Phase 1 MVP):
- Phase 2 will introduce NgRx for application-wide state

## Material Theme Integration

### Theme Application
- Material 3 design system integrated via `@angular/material`
- Theme configured in `styles.scss` with custom color palette
- Components automatically inherit theme colors

### Color Semantic Mapping
```typescript
color="primary"   // Navy blue - main actions
color="accent"    // Accent color - secondary actions
color="warn"      // Warning color - alerts
```

## Performance Considerations

### Change Detection
- Standalone components support OnPush change detection (future optimization)
- Signals enable fine-grained reactivity without zone.js overhead (future)

### Bundle Size
- Material components are tree-shakeable
- Only imported modules are bundled
- Lazy loading ready (routes can be lazy-loaded in Phase 2)

## Accessibility (a11y)

### Implemented Features
- Semantic HTML: `<main>`, `<nav>`, `<footer>`
- ARIA labels on icon buttons
- Proper heading hierarchy (h1 → h6)
- Form labels associated with inputs
- Color contrast meets WCAG AA standards
- Keyboard navigation support (Material built-in)

## Testing Strategy (Phase 2)

Prepared for unit and E2E testing:
- Standalone components are easier to test
- Reactive forms are testable with FormBuilder mocking
- Service methods can be tested independently

## Deployment Considerations

### Build Optimization
```bash
ng build --prod
# Produces optimized bundles with tree-shaking
```

### SEO
- Structured heading hierarchy
- Semantic HTML
- Meta tags ready in main layout
- Responsive viewport configuration

## Future Enhancements

### Phase 2
- Backend API integration
- User authentication
- Real data persistence
- Error handling and retry logic

### Phase 3
- Notifications system
- Real-time updates
- Advanced caching strategies
- Offline support (PWA)

## Known Limitations (Phase 1)

1. **Mock Data**: All data is hardcoded (dashboard projects, talent cards)
2. **No Persistence**: Form submissions don't save to backend
3. **No Authentication**: All pages are publicly accessible
4. **No Real-time**: No WebSocket or real-time updates
5. **Minimal Validation**: Client-side validation only

These will be addressed in Phase 2 when backend integration is added.

---

**Architecture Documented**: February 2026
**Last Updated**: Phase 1 Completion
