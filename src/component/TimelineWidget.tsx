import type { TimelineItem } from "../data/CityContent";

type TimelineWidgetProps={
header:string,
subHeader:string,
content:TimelineItem[]
}

const TimelineWidget: React.FC<TimelineWidgetProps> = ({header,subHeader ,content}) => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">
          {header}
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          {subHeader}
        </p>
      </header>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gray-300" />

        <div className="space-y-10">
          {content?.map((item, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Dot */}
              <div className="relative z-10 mt-1 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 flex-1">
                <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                  {item.period}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-gray-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineWidget;
