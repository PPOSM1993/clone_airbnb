import PropertyList from "@/app/components/properties/PropertyList";

const MyPropertiesPage = () => {
    return (
        <>
            <div className="max-w-[1500px] mx-auto px-6 py-12">
                <h1 className="my-6 text-2xl">Property Pages</h1>

                <PropertyList />
            </div>
        </>
    )
}

export default MyPropertiesPage;