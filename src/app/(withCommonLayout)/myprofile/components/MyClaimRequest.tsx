import { useGetClaimItemsQuery } from '@/redux/api/claimApi';

const MyClaimRequest = () => {
  const { data, isLoading } = useGetClaimItemsQuery({});
  console.log(data);
  return (
    <div>
      <h2>MYCLAIM ITEMS</h2>
    </div>
  );
};

export default MyClaimRequest;
