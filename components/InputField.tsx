interface Props {
  label: string;
  value: string;
}

export default function InputField(props: Props) {
  const { label, value } = props;
  return (
    <div className='flex flex-col mb-6'>
      <label className='text-sm font-semibold'>{label}:</label>
      <input type='text' value={value} />
    </div>
  )
}