# Development

## Testing

- testing some class

```bash
npx jest src/app.controller.spec.ts
```

## Coding tracking
git log <last tag|release> HEAD --pretty=format:%s
```bash
git log HEAD --pretty=format:%s
git log v1.0.0 HEAD --pretty=format:%s
# view release commit new feature
git log 1.1.0 HEAD --grep feature
```