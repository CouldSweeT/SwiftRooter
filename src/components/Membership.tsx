import Image from 'next/image';

type MembershipProps = {
  images: string[];
};

export function Membership({
  images,
}: MembershipProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <MembershipGroup images={images} />

      <div className="text-left">
        <p className="text-lg font-medium text-zinc-950">
          <span className="font-semibold text-primary">16K+</span> Membership
        </p>
        <p className="text-sm text-zinc-600">Enjoy our facilities</p>
      </div>
    </div>
  );
}

type MembershipGroupProps = {
  images: string[];
};

function MembershipGroup({ images }: MembershipGroupProps) {
  return (
    <div className="flex">
      {images.map((src, index) => (
        <div
          key={src}
          className={`relative h-11 w-11 overflow-hidden rounded-full ${
            index > 0 ? '-ml-3' : ''
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
