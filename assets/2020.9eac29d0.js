const a=[.12,.15,.01,.62,0,.04,0,.09,.87,.56,.02,.35,.97,0,.12,.19,.33,.59,.83,.52,.62,0,.28,.02,.88,0,0,.02,0,0,0,0,.04,.05,.01,.31,.48,.03,0,.04,.18,0,0,.98,.98,0,.66,.33,0,0,.12,.87,.5,0,0,.24,.73,0,0,.06,0,0,0,.75,.77,0,0,.02,.7,.85,.78,.77,0,.08,0,.19,.03,0,.18,.01,.01,.01,.57,0,.63,0,0,.92,0,.38,0,.22,.01,.19,.54,0,0,0,.12,0,.55,0,0,.38,0,.78,.02,.09,.01,0,.28,0,.07,.02,.6,.07,.29,0,.09,.22,.7,0,.33,.73,.63,0,0,.34,0,.28,0,.97,.58,0,.28,.31,0,0,0,.58,0,.59,0,0,.75,.42,.83,0,0,.15,0,.3,.67,.37,.01,0,.27,.91,.04,.03,0,0,.04,0,0,0,.08,0,0,.01,.74,0,0,.08,.01,0,.37,0,0,.02,.08,.61,.91,.59,0,.08,.15,.75,0,.83,.7,0,.65,0,0,.03,0,0,.67,0,.76,0,.14,.97,.02,0,.81,0,0,.3,.01,.23,.6,.52,0,.01,.1,.01,0,0,0,0,0,0,0,.13,0,0,0,.03,.88,.88,.1,.01,.86,.59,.27,0,0,.44,0,.2,0,0,.04,.36,.13,.68,.67,.8,0,.02,0,.03,0,.05,.57,.07,.01,.19,.53,0,0,0,0,0,0,0,.12,.05,.07,.15,.13,.01,.07,.54,0,0,0,0,0,0,.18,.12,0,.07,0,.88,0,0,.99,0,0,.75,.01,0,0,.04,.28,0,.84,.02,0,.46,.11,.01,.69,0,0,0,0,.82,.41,.91,0,0,0,0,0,.02,0,.24,.14,0,0,0,0,.02,.47,0,0,0,.06,.61,0,.24,0,0,0,0,0,0,.23,.69,.29,0,.18,0,.01,0,0,0,.35,0,.01,.28,0,.1,0,.1,.66,.89,0,.05,.99,.01,.07,.08,0,.81,.01,.34,.76,0,0,0,.03,0,.41,0,.6,.82,.35,.75,.66,.11,.05,.86,0,0,0,.81,.93,.02,0,.01,0,.2,0,.53,.51,0,0,.12,0,.94,.96,0,0,0,0,0,.03,0,0,.5,0,.21,0,.01,.79,.2,0,.53,.94,.06,.2,.19,0,.07,.02,0,.2,.64,0,.02,.1,0,0,0,0,0,0,.03,0,0,.09,0,.27,0,.04,0,0,0,.53,0,0,.06,0,.1,0,0,.01,0,.3,.15,.53,.41,0,.01,.03,.32,.13,.07,0,.06,.05,.6,.03,0,0,.89,0,.01,0,0,0,.99,.86,.01,.72,.46,.74,.36,0,.08,0,.07,.06,0,0,.01,0,.11,0,.7,0,.01,.13,0,0,0,0,.03,0,0,.01,0,0,0,.2,0,.04,.57,0,.84,.88,.15,.96,0,0,0,.9,0,.39,.17,0,.13,0,.59,.86,0,.58,0,0,.73,.18,0,0,0,0,.13,0,.15,0,.82,0,.01,0,.87,.01,0,0,.2,.83,.5,.5,.31,0,.15,0,0,.1,.71,0,.02,.69,0,0,.68,0,.38,0,0,0,.86,.05,0,0,.78,.65,.31,.58,0,.19,.04,.11,.01,0,.58,.06,0,0,0,.31,0,0,.73,.78,0,.86,.67,.01,0,.62,.42,.01,.32,.03,.76,.01,.59,0,.91,0,.38,.04,0,0,.99,.63,0,0,0,.06,0,.05,0,.22,0,0,0,0,.16,.06,0,0,0,.65,0,.55,0,0,0,.05,.52,.16,.04,.56,.7,.02,0,.01,0,.04,.03,.6,0,0,0,.05,.73,.18,0,0,0,0,0,.05,.67,.42,0,.3,.03,0,.02,0,0,0,.68,.88,.35,0,.44,.31,.4,.73,.09,0,0,0,.19,0,.1,.13,.2,.6,.13,.66,0,0,.02,.06,.41,.56,.82,.58,.01,0,.48,.2,0,.69,.46,.02,.5,.02,0,.08,0,0,0,0,.29,0,0,.7,.85,.07,.95,.08,.04,0,0,.9,.03,.3,.61,.01,0,.25,.1,.87,.01,.1,.67,.68,.61,0,.88,.01,0,.03,0,.78,.28,0,.75,0,.11,0,0,0,.54,0,.22,0,.58,0,0,.04,.23,.23,0,.01,0,0,0,.2,0,0,0,0,.01,0,0,0,0,1,0,.56,.01,0,0,.61,0,.04,0,0,.18,.84,.84,0,.01,0,0,0,0,.67,.03,.67,.96,.16,.06,.8,.09,.03,0,.04,.89,0,.17,0,.5,.21,.03,.33,.02,.21,0,0,.06,.72,0,0,0,.05,0,0,.01,.85,0,.03,.64,.81,0,0,0,0,.11,0,.01,.45,.01,0,0,0,.23,0,.02,.57,.66,.15,0,0,0,.01,.01,.27,.37,0,.38,.48,0,.97,.17,0,.02,0,.25,0,.29,.01,0,0,.36,.01,.35,0,.02,.11,.18,.86,.25,.86,.29,.56,0,.87,0,.68,0,0,.59,0,.01,.17,0,0,.12,0,.22,.03,0,0,0,.3,.04,0,0,0,.03,.24,0,0,0,0,.91,0,0,.21,.02,0,0,.07,.01,.67,.1,.32,.25,.04,.73,0,.92,0,.74,0,0,0,.27,.03,.67,.18,.96,0,.72,.26,.61,0,.31,0,0,.01,0,0,.08,.04,0,0,0,0,.01,0,.05,.2,.03,0,.92,.97,0,0,.02,0,.06,.54,0,.24,.5,.7,.14,.7,.62,.39,.9,.78,.04,.27,.7,.32,.4,.01,0,0,0,0,.49,.02,.7,0,.34,0,.15,.12,0,.97,0,0,.38,.95,.08,0,.05,.2,0,.09,0,.32,.04,.16,.53,.03,.04,0,.65,.96,0,.56,.37,.01,0,0,.05,0,.06,.38,.35,.11,.03,0,.04,0,.66,.01,.66,0,0,0,.01,.02,.55,0,0,0,.36,.78,.15,.28,0,0,0,.74,0,.57,.78,0,0,.24,.18,0,0,.91,.1,0,0,.07,0,.18,0,0,0,.87,0,0,.55,.14,.45,.4,.5,0,.73,.27,0,0,.23,0,.01,.86,.93,0,.01,.07,.21,.01,.88,.02,.87,.33,.35,0,.75,0,0,0,.03,.61,0,0,0,.32,0,0,.01,.23,0,0,.82,.24,.63,0,.01,.94,.72,0,0,.72,0,.95,0,.05,.83,.58,.08,.81,0,.03,.42,0,.07,0,0,0,.87,.39,0,0,.84,.93,.96,.04,.74,0,.49,.24,0,.06,.33,.01,.91,.37,.09,0,.77,.84,.91,0,.74,.86,0,0,.28,0,0,.99,0,0,0,0,0,0,0,0,.99,.07,.09,.28,0,.01,0,0,0,.15,0,.02,.83,.73,0,.68,0,0,0,0,0,0,.11,0,.05,.03,.91,.91,.89,.86,0,.06,.97,.76,.04,.26,.67,0,.35,0,.45,.58,0,.81,.25,0,0,.04,0,0,.03,.38,.01,.01,0,0,0,0,.73,.02,.99,0,.04,0,.15,.02,.62,.24,.64,0,.06,.48,0,.33,.51,.01,.96,.44,.58,.02,0,0,0,0,0,.89,0,0,0,.04,0,.22,.54,.68,.09,0,0,.11,.02,0,.04,.04,0,0,.03,0,.01,.32,.5,0,0,.23,.05,0,0,.41,0,0,0,.79,0,.06,0,0,.69,.04,.72,.88,0,.02,.16,.01,.33,.82,.74,.07,0,.1,.88,0,0,0,0,.05,0,0,0,0,0,0,0,.75,.28,.08,.01,0,0,.59,.02,.01,.63,.1,.4,0,.19,.67,.75,0,.2,.28,.97,.18,.32,.28,.37,.97,.77,0,0,0,0,0,0,.3,.01,0,.28,.03,.01,0,.52,0,.01,0,.04,.52,0,0,.63,0,0,.01,0,.46,.94,.04,.02,0,.67,.55,.54,.01,.02,0,.36,.26,.12,0,.49,.06,.03,0,0,0,0,.33,.7,0,.36,0,.09,.15,0,.75,0,.88,.36,.31,.41,.02,.92,.43,.23,0,0,.01,.03,.09,1,.42,0,.21,0,0,0,.01,.53,.75,0,0,.29,.58,0,0,.06,0,0,0,.47,0,.02,.55,0,0,0,0,.07,.46,0,.04,0,0,0,0,0,.9,.75,.21,.01,.06,.89,0,0,.67,0,.03,0,0,.64,.01,.51,.03,0,.71,.61,0,.71,0,.3,0,0,0,.01,0,.06,0,.74,.64,0,0,0,0,0,0,.38,0,0,0,.01,0,0,0,0,0,.01,0,0,.01,.29,0,.3,0,0,.94,0,0,.77,0,0,.21,.11,0,.01,0,0,0,0,.08,.06,0,0,.06,0,.6,.13,0,0,0,.11,.04,.11,0,0,0,0,0,.74,0,.26,0,.1,0,0,.89,0,.2,0,.45,.95,0,0,0,0,.02,.01,.29,.62,.1,.01,0,0,.75,.26,0,.1,0,0,0,0,.76,0,.16,0,.03,0,.65,.44,.72,0,.03,.91,0,.79,0,.39,0,0,0,0,0,0,0,.34,.02,0,0,.82,.19,0,0,0,0,0,0,.28,0,0,0,0,.57,.06,.01,0,0,.01,.14,0,0,0,.18,0,.24,.27,0,.27,0,.2,0,0,.76,0,.07,.26,.34,0,.03,.4,0,.14,.18,0,0,.04,.66,0,0,.07,0,0,.04,.44,.02,0,.01,.14,.47,0,0,.44,0,.81,0,0,.01,.02,0,.67,.49,.11,0,0,.02,0,0,.12,.07,.59,0,.54,.14,0,0,.01,0,0,0,0,0,0,.94,.04,.83,.71,0,.07,.02,.06,.01,0,.47,0,.21,0,0,.51,.84,.04,.34,.35,.21,0,.35,.13,.18,.79,.27,.42,0,0,.95,.1,.07,.17,.01,.61,0,0,.49,0,.02,0,.03,0,0,0,0,0,0,.06,0,.02,0,0,0,0,.03,0,0,0,0,0,.04,0,0,.24,0,.16,0,.19,0,.01,.07,.27,0,.42,0,.7,.09,0,0,.46,0,0,.37,0,0,0,0,0,0,.08,.11,.04,.36,.76,.84,.41,.11,.3,.69,0,.89,.16,.08,0,.14,.84,.06,.8,.5,.52,0,.01,0,0,0,.7,.14,.02,.43,0,.87,0,0,0,.24,.66,0,0,0,.19,.13,.03,0,0,.33,.88,.1,.03,.85,.65,.16,.1,0,0,0,0,.35,.01,0,0,0,.44,.57,.4,0,.03,.45,0,0,.17,0,.12,0,0,0,0,0,0,0,.46,.02,.47,.05,.7,.03,.03,.22,.12,0,0,.56,0,.01,.63,.93,0,0,.27,0,.13,.38,.18,.62,.72,.73,.26,0,.41,.32,0,0,0,.13,.07,.02,0,0,.06,.09,0,0,0,0,.81,.67,.4,0,0,.38,.06,.71,.14,.37,.04,0,.21,.05,0,.58,.05,.82,0,.01,0,.01,0,.17,0,.87,.06,.59,.77,.2,0,.43,0,0,0,0,.7,.97,0,0,0,0,.11,0,0,0,0,0,.76,0,.15,0,0,.03,.03,.02,0,0,.18,0,.79,0,.18,.04,0,.01,.09,0,0,.05,0,.08,0,.51,0,.04,.06,.43,.08,.88,.59,0,0,0,0,0,.52,0,0,0,0,0,0,0,0,0,.8,.01,.01,.87,.13,.91,.42,.02,.15,.44,0];export{a as pvalData};
