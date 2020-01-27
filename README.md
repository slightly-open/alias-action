# Alias action

This action gives you an alias of value by key-value map.

## Inputs

### `value`

**Required** Value for aliasing

### `map`

**Required** Value-alias mapping


# Example usages

## Basic usage
```yaml
uses: actions/alias@v1
with:
  value: ${{ github.author }}
  map: |
    gituser1 -> chatuser1
    gituser2 -> chatuser2
```
