
type Props = {
  data: string[];
}

export const Pagnation = (props: Props) => {
  return (<>
    <div>Pagnation</div>
    <div>{JSON.stringify(props.data)}</div>
  </>)
}