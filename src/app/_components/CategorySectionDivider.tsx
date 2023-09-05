interface SectionDividerProps {
  divId: string;
  title: string;
}

const CategorySectionDivider = (props: SectionDividerProps) => {
  return (
    <div id={props.divId.replace(/\s/g, "")} className="scroll-smooth p-10">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        {props.title}
      </h1>
    </div>
  );
};

export default CategorySectionDivider;
