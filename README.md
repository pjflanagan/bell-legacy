This is the first ideation on what is now [Bell](https://github.com/pjflanagan/bell). What this project describes is a little more like what Fern is. This project is no longer being pursued in this direction, we have transitioned to a DSL Postman alternative. 

# Bell (Legacy)

Bell is a solution for storing data about API endpoints that covers basic use
cases for calling and testing APIs. Bell files describe your API endpoints and
are stored in the same repository as your app's source code. They can be compiled
into typescript types and/or referenced and called through React hooks. Bell also
has a VSCode extension for testing APIs without ever leaving your favorite editor.

- `bell-cli`
  - compiles `.bell` files into ts or js to be used by `bell-react`
- `bell-react`
  - React hook `useRing` for stateful event calls
  - `fetch` replacement `ring`
- Bell VSCode Extension
  - highlighting for `.bell` file syntax
  - UI for sending test requests

## Bell CLI

```bash
# compile .bell files into .ts or .js
bell compile
# run a test from the command line
bell test host/test_name
```

## Bell React

## Bell VSCode Extension

## Bell File Example

```bell
@domain api.host.com

@name sendOrder
@endpoint POST /order/send
@request {
  productId: id;
  quantity: number;
}
@response {
  status: 'success' | 'failed';
}

```
