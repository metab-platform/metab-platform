const a=[.05,.15,0,.36,0,.02,0,0,0,.2,.66,.76,.79,0,.27,.67,.68,.36,.22,.59,.49,0,.02,.24,0,0,0,.07,.23,0,0,0,0,.59,.7,.1,.01,.42,0,0,.11,0,0,.53,.09,.81,.19,.06,0,0,.01,.55,.96,0,0,.18,.01,.01,.03,0,0,0,0,.42,0,0,0,.86,.17,.71,.94,.55,0,0,0,.37,0,0,0,0,0,.01,.53,0,.5,0,0,.57,0,0,0,.4,0,0,.68,.01,0,0,.79,0,.2,0,0,.11,0,.31,.02,.16,0,0,.88,0,.02,0,.74,0,.28,0,.01,0,.84,0,.09,.73,.74,0,0,.57,0,.01,0,.78,.4,0,.25,.37,0,0,0,.23,0,.89,0,0,.71,.48,.61,.58,0,.74,0,0,.27,.86,0,0,0,.2,.01,.39,0,0,.76,0,0,0,.03,0,0,0,.8,0,0,.62,0,0,.2,0,0,0,.31,.99,.36,.06,0,.02,.86,.8,0,.17,.57,0,.59,0,0,0,0,0,.12,0,.22,0,0,.54,0,0,.87,0,0,.45,0,.7,.37,.05,.03,0,.12,0,0,0,0,0,0,0,0,0,0,0,0,0,.74,.68,.46,0,.41,.73,.62,.07,.01,.87,0,.87,0,0,0,.07,.51,.06,.4,.4,0,0,0,.01,0,.56,.27,0,.01,.01,.62,0,0,0,.15,0,0,0,.75,.01,.03,.09,0,0,0,.69,0,0,0,0,0,0,.03,0,0,0,0,.04,0,0,.01,0,0,.04,0,0,.42,.02,.05,0,.21,0,0,.57,.13,.12,.21,0,0,.23,0,.45,.76,.97,0,0,0,0,0,0,0,.78,.71,0,0,0,0,.1,.12,0,0,0,.13,.63,0,.18,0,0,.27,.09,0,0,.95,.13,.01,0,.19,0,0,0,0,.01,.44,0,0,.01,0,.02,0,0,.06,.42,0,.11,.94,0,.17,0,0,.24,0,.11,.01,0,0,0,.62,0,.12,0,.3,.22,.86,.64,.31,0,.01,.97,0,0,0,.67,.62,.27,.82,0,0,.4,.25,.39,.21,0,0,0,0,.99,.65,0,0,0,0,0,.86,0,0,.62,0,.01,0,0,.17,0,0,.31,.08,0,0,.65,0,.3,0,0,0,.31,0,0,.26,0,0,0,0,0,0,.15,0,0,.01,0,.53,0,0,0,0,.02,.55,.45,0,0,0,0,0,0,0,0,.44,0,.03,.72,0,0,.21,.01,.04,.08,0,0,0,0,0,0,0,.11,0,0,0,.02,0,.32,.96,0,.41,.65,.21,.93,0,0,0,.09,0,0,0,.94,0,0,0,.81,.53,0,0,0,0,.01,0,.04,0,0,0,0,0,0,0,0,.02,.17,0,.88,.19,.3,.05,0,0,0,.93,0,.91,.02,0,.01,.16,.4,.49,0,.81,0,0,.65,.19,0,0,.91,0,0,0,0,0,.86,0,.47,0,.63,0,0,0,0,.49,.74,.49,.27,0,.23,0,0,.06,.46,0,0,.26,0,0,.59,0,.79,0,0,0,.62,0,0,0,.02,.64,.42,.54,0,0,0,0,0,0,0,0,0,0,0,.01,0,0,.01,.62,.93,.99,.09,0,0,.39,.47,0,.04,.02,.42,0,.63,0,1,0,.04,.29,0,0,.16,.89,0,.01,0,0,0,0,0,.01,0,.01,0,0,.18,.02,0,.12,0,.12,0,.02,0,0,0,0,.09,.28,.01,.29,.73,0,0,0,0,.07,.34,.78,0,0,0,0,.42,.23,0,0,.01,0,0,0,.96,.67,.24,.29,0,0,.05,0,0,0,0,.42,.06,.02,.89,.68,.17,.28,.04,0,0,0,0,0,0,.4,.07,.04,.01,.76,0,0,.01,0,0,.06,.13,.09,.03,.05,.35,0,0,.01,.81,.01,.24,.1,0,.01,0,0,0,0,.84,0,0,.05,.61,.19,.48,.24,0,0,0,.97,.02,0,.04,0,0,.07,.14,.18,.14,0,.01,.73,0,0,.79,.11,0,0,0,.03,0,0,.74,0,.19,.02,0,0,.75,0,0,0,0,0,0,0,.3,.9,0,0,0,0,0,.39,0,0,0,0,.81,0,0,0,0,0,0,.42,.05,0,0,.03,0,0,0,0,.48,.91,.11,0,0,0,0,0,0,.12,0,.08,.3,0,0,.73,0,.04,0,0,.38,.37,0,0,.82,.65,.12,.15,0,.18,0,0,0,.66,0,0,0,.23,0,0,.08,.95,0,0,.82,.29,0,0,0,0,.06,0,0,.6,.02,.06,0,0,.36,.07,.01,.77,.77,.86,0,0,0,.7,0,.07,.36,0,0,.89,0,.04,.12,0,.01,0,.11,0,.14,0,0,0,.82,0,.21,0,0,0,.08,.98,.04,.65,0,.49,0,.36,0,.98,0,0,.98,0,0,.24,0,0,.51,0,.21,.17,.04,0,0,.21,0,0,0,0,0,.01,0,0,0,0,.55,0,0,.01,.02,0,0,.7,.03,0,0,.98,.02,0,.36,0,.48,0,.98,0,.21,0,0,0,.12,.44,.25,0,.93,.59,0,0,.23,0,.48,.57,0,0,.82,0,0,0,0,0,0,0,0,0,0,.13,.74,.62,0,0,0,0,.02,.59,0,.07,.58,.95,.06,.72,.78,.71,.99,.51,.01,.01,.79,.06,.54,.01,0,0,0,0,.27,0,.52,.12,.88,0,.03,.1,0,.51,0,0,.63,.93,.03,0,.72,.06,0,.34,0,.02,0,.34,.4,.02,0,0,.37,.88,0,.6,.21,.02,0,0,0,0,0,.17,.92,.01,.21,0,0,0,.1,.38,.09,0,0,0,0,0,.58,0,0,0,0,.86,0,0,0,0,0,.89,0,.73,.79,0,0,.45,.1,0,0,.37,.18,0,0,0,0,0,0,0,0,.01,0,.01,.04,0,0,.08,.08,0,.28,.18,0,0,.84,0,0,.89,.07,0,0,.02,.73,0,.83,.01,.55,.68,.23,0,.22,.01,0,0,.05,.28,0,0,0,.35,.11,0,.07,.91,.01,0,.8,.01,.58,0,.01,.52,.17,0,0,.78,0,.92,0,.24,.69,0,0,.26,0,0,.23,0,0,0,0,0,.44,0,0,0,.42,.09,.62,0,.76,0,.5,.91,.01,0,.66,0,.06,0,0,.85,.02,.8,.22,0,.18,.5,0,0,0,0,0,.86,0,0,0,.03,0,0,0,0,.05,.23,.37,0,0,.05,0,0,0,.36,0,0,.82,.51,0,.35,0,0,0,0,.05,0,.97,0,0,0,.65,.56,.83,.06,0,0,.25,.76,.7,.04,.26,0,.85,0,.8,.75,0,.8,.71,0,0,.01,0,0,0,.49,0,0,0,0,0,0,.25,0,.41,0,.12,0,.02,.02,.02,.07,.52,0,.08,0,0,.42,.4,0,.55,.66,.95,.02,0,0,0,.1,0,.32,0,0,0,0,0,.74,.25,.62,.51,0,0,0,.12,0,0,0,0,.1,.05,0,0,.01,.96,0,.01,.05,.08,0,0,0,0,0,0,.09,0,0,.01,.75,.11,0,.25,.58,0,0,.4,.14,.34,0,.03,.1,0,.04,.04,0,0,0,0,0,0,0,0,0,0,0,0,.6,.01,.52,0,0,0,.05,.87,.02,0,0,0,0,.5,.78,.53,0,.75,.07,.05,0,.3,0,0,.02,.54,0,0,0,0,0,0,.01,.99,0,.56,0,0,0,.17,0,0,0,.92,.28,0,0,.82,0,0,0,0,.46,.1,0,0,0,.26,.68,.48,.05,0,0,.98,0,.09,.06,.01,.16,0,0,0,0,0,.67,.09,0,.19,0,.27,.13,0,.86,0,.29,.08,.85,0,0,.24,.46,0,0,0,0,0,.14,.83,.29,0,.1,0,0,0,.05,.11,0,0,0,0,.86,0,0,.59,0,0,0,.96,0,0,.58,0,0,0,0,.02,.72,0,0,0,0,0,.2,0,.72,.45,.11,0,.27,.04,0,0,0,0,0,0,0,.23,0,.84,0,0,.52,.94,0,.45,0,.11,0,0,0,0,.3,.21,0,.37,.65,0,.02,0,0,0,0,.44,0,0,0,0,0,0,0,0,0,.01,0,0,0,.61,0,.8,0,0,.68,0,0,.83,0,0,.43,.02,0,0,0,0,0,0,.95,.58,0,0,0,0,.6,0,0,0,0,.65,.23,.07,0,0,0,0,0,.05,0,0,0,0,0,0,.2,0,.03,0,.13,.02,0,0,0,0,0,0,.22,.02,0,0,0,0,.58,.95,0,0,0,0,0,0,.88,0,.1,0,.41,0,.26,.92,.35,0,0,.04,0,.89,0,.21,0,0,0,0,0,0,0,.98,.01,0,0,.38,.03,0,0,0,.51,0,.01,.16,0,0,0,0,.14,.01,0,0,0,0,0,0,0,0,.13,0,.76,.62,0,.48,0,.64,0,0,.84,0,.01,0,.87,0,.03,.86,0,0,.04,0,0,.01,.27,0,0,.81,0,0,.89,.24,0,0,0,.06,.79,.8,0,.71,0,.46,0,0,0,0,0,.59,.06,.01,0,0,0,.02,0,0,0,.01,.48,.59,.02,0,0,0,0,0,0,0,0,0,.92,0,.1,.98,0,.03,0,.03,0,0,.5,0,0,0,0,.72,.68,.05,.09,.19,0,0,.15,.65,.7,.32,.9,.36,0,0,.43,0,0,.03,0,.06,0,0,.55,0,0,0,.12,.01,0,.02,0,0,.01,.51,0,0,0,0,0,0,.86,0,0,0,0,0,.22,.05,0,0,0,.48,0,0,0,0,0,.01,0,.75,0,.63,0,0,0,.12,0,0,.01,0,0,0,0,0,0,.03,.65,.41,.78,.89,.6,.08,.99,0,0,0,.84,.38,.47,0,.24,.09,.1,.01,0,.57,0,0,0,.18,0,.12,.85,.13,.75,0,.33,0,0,0,0,0,0,.64,0,.03,0,0,0,0,.83,.03,.03,.2,.66,.19,.05,.33,0,0,0,0,.01,0,0,0,.01,.43,.37,.64,0,0,.29,0,0,.12,0,.09,0,0,0,0,0,0,0,.5,0,.01,.13,.14,.14,0,.45,.46,0,0,.72,0,.39,.39,.4,0,0,.23,0,.51,.97,.61,0,0,.53,.87,0,.05,.01,0,0,0,0,0,0,0,0,.02,.01,0,0,0,.16,.83,.12,.91,0,0,.32,.01,.64,0,.01,.11,0,.85,.01,0,.08,.02,.95,0,0,0,0,0,.46,0,0,.01,0,.84,.52,0,.02,0,.08,0,0,.01,.85,0,0,0,0,.02,0,0,0,0,0,.85,0,.02,0,.01,0,.04,0,0,0,0,0,.06,0,0,.1,0,0,0,0,0,0,0,.03,0,.02,0,0,0,.46,0,.58,.98,0,0,0,0,0,.9,0,0,0,0,0,0,0,.6,0,.2,.01,0,.64,0,.57,.14,0,.44,.36,0];export{a as pvalData};
