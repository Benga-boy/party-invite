export interface Istate {
  pic: string
  name: string
  age: number | string
  description: string
}

export interface Iprops {
  people: {
    pic: string
    name: string
    age: number | string
    description: string
  }[]
  }

  export interface Props {
    handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void,
    handleSubmit(e: React.FormEvent<HTMLFormElement>): void,
    values: {name: string, age: number | string, pic: string, description: string}
  }