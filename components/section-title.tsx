type SectionTitleProps = {
  title: string;
  pretitle: string;
  children?: React.ReactNode;
  justify?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  pretitle,
  children,
  justify,
}) => {
  return (
    <div
      className={`max-w-xl ${
        justify === 'left' ? 'text-left' : 'text-center mx-auto'
      }`}
    >
      <div className='relative'>
        {children}
        <p className='font-cursive transform -rotate-6 -translate-y-8 text-3xl absolute'>
          {pretitle}
        </p>
        <h2 className='text-4xl font-bold mb-6'>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
