import React from "react";
// const groupedData: { [s: string]: any; } = [];

// const sharedAxisStyles = {
//     tickLabels: {
//         fontSize: 13
//     },
//     axisLabel: {
//         padding: 39,
//         fontSize: 13,
//         fontStyle: "italic"
//     }
// };

export default function TimelineGraph() {
    return (
        <>
            {/* <div className="absolute w-1/6 my-3 mx-2 ">
                <MenuDropdown
                    menuList={{
                        menuTitle: "Year",
                        menuData: [
                            {
                                link: "/",
                                title: "2002",
                                urlMatchers: ["/"]
                            },
                            {
                                link: "/",
                                title: "2023",
                                urlMatchers: ["/"]
                            }
                        ]
                    }}
                />
            </div>
            <VictoryChart
                height={450}
                scale={{ x: "time" }}
                containerComponent={
                    <VictoryVoronoiContainer
                        style={{}}
                    />
                }
            >
                <VictoryLabel
                    x={225}
                    y={25}
                    textAnchor="middle"
                    text="Portfolio growth in 2022"
                />

                <VictoryStack
                    colorScale={[
                        "#003f5c",
                        "#2f4b7c",
                        "#665191",
                        "#a05195",
                        "#d45087",
                        "#f95d6a",
                        "#ff7c43",
                        "#ffa600"
                    ]}
                >
                    {Object.entries(groupedData).map(([key, dataGroup]) => {
                        return (
                            <VictoryHistogram
                                data={dataGroup}
                                x="day"
                                binSpacing={8}
                                style={{
                                    data: { strokeWidth: 0 }
                                }}
                            />
                        );
                    })}
                </VictoryStack>

                <VictoryAxis
                    tickCount={12}
                    tickFormat={date => date.toLocaleString("default", { month: "short" })}
                    style={sharedAxisStyles}
                />

                <VictoryAxis
                    dependentAxis
                    label="Total # of Songs"
                    style={sharedAxisStyles}
                />
            </VictoryChart> */}
        </>
    )
}