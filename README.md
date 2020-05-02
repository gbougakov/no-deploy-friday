# No Deploy Friday

This GitHub Action will prevent you from deploying on Friday after 5pm.

## Inputs

### `timezone`

**Required** Your local timezone. Default `"UTC"`.

## Example usage
```yaml
uses: gbougakov/no-deploy-friday@v1
with:
  timezone: 'Europe/Moscow'
```