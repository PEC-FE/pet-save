interface Props {
  title: string;
  children: React.ReactNode;
}

const Container = ({ title, children }: Props) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Container;
