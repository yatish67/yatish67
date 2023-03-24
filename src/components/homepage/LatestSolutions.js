import ButtonLink from "../reusable/ButtonLink"
import Card from "../reusable/Card"
import Icons from "../SvgIcons/Icons"

const LatestSolutions = ({ solutions }) => {
  return (
    <section className="mt-32 flex flex-col">
      <h2 className="text-5xl text-center text-white font-extrabold">
        Featured Solutions
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-8">
        {solutions?.map((solution) => {
          return <Card key={solution.id} card={solution} isSolution />
        })}
      </div>
      <ButtonLink to="/solutions" className="self-center">
        View more
        <Icons.ArrowRight className="ml-2 -mr-1" />
      </ButtonLink>
    </section>
  )
}

export default LatestSolutions
