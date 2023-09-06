interface SectionDividerProps {
  divId: string;
  title: string;
}

// TODO: need to fix scroll to section. it scrolls to the middle of a section. not sure how to fix yet. but look into using offsets with nextjs
const CategorySectionDivider = (props: SectionDividerProps) => {
  return (
    <section id={props.divId.replace(/\s/g, "")} className="scroll-smooth p-10">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        {props.title}
      </h1>
    </section>
  );
};

export default CategorySectionDivider;
