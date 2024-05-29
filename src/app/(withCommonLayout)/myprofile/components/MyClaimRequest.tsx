import { useGetClaimItemsQuery } from '@/redux/api/claimApi';

const MyClaimRequest = () => {
  const { data, isLoading } = useGetClaimItemsQuery({});
  if (isLoading) {
    <h1>Loading ..</h1>;
  }
  console.log(data);
  return (
    <div>
      <div className="py-32">
        <h1 className="text-3xl font-bold mx-auto text-center ">
          My Claim Requests
        </h1>
        <hr className="w-48 mx-auto text-center my-6" />
      </div>
    </div>
  );
};

export default MyClaimRequest;
