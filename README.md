# TypeScript Basics

## Type Inference

In TypeScript, a type is inferred when declaring a variable (the type of the value that was given)

```ts
let age = 15;
age = "some String"; // fails because TS gives age a 'number' type
```

## Base Types

- `Primitives:` :number, :string, :boolean
- `More complex types:` arrays, objects
- `Function types, parameters`

### Arrays definitions

```ts
let restaurants: string[]; //array of strings
```

### Objects definitions

```ts
let student: { name: string; code: number };
```

#### Type Aliases

```ts
type Student = { name: string; code: number };
let student: Student;
let students: Student[];
```

### Union Types

If we may have more than one type for a variable

```ts
let id: number | string;
```

### Function Types

When declaring a function, we should specify the types of the parameters (as well as the return type - if not inferred)

```ts
function addWithType(a: number, b: number): number {
  return a + b; // here the return type is also inferred, therefore the type in the declaration can be removed
}
```

```ts
// Short function type definition (as a method in an obj for example)
type CustomObjectStructure = {
  property: string;
  logProperty: (property: string) => void; //function does not return
};
```

## Generics

```ts
function insertAtBeginning<Type>(array: Type[], value: Type) {
  const newArray = [value, ...array];
  return newArray;
}
```

Generic Function: The function in the example is type safe, but flexible (at execution the type is locked in and known)

### Using generics

In the React part of this repository, we have used generics (functions coming from the library) a few times. Some concrete examples may include:

```ts
function Component(props): React.FC<{ children?: ReactNode }> {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<Todo[]>([]);

  return JSXCode;
}
```
