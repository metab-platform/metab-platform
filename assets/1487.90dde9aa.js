const a=[.19,.13,.01,.42,0,.01,.01,0,.02,.03,.5,.18,.95,0,.74,.8,.62,.72,.85,.28,.73,0,.01,0,.2,0,0,.05,0,0,0,0,0,.52,.01,.04,.29,.15,0,.01,.09,0,0,.91,.1,.05,.06,.1,0,0,.1,.7,.91,0,0,.68,.11,0,0,.03,0,0,0,1,.64,0,0,.06,.64,.74,.52,.84,0,0,0,.15,0,0,.24,0,.01,.1,.77,0,.84,0,0,.24,0,.2,0,.15,0,.25,.89,0,0,0,.14,0,.03,0,0,0,0,.29,.01,.03,0,0,.35,0,.06,0,.42,.04,.7,0,.01,.01,.68,.01,.13,.57,.01,0,0,.52,0,.16,0,.09,.52,0,.03,.95,0,0,0,.54,0,.83,0,0,.55,.34,.92,0,0,.29,0,0,.61,.47,0,0,.9,.45,0,.33,0,0,.85,0,0,0,.21,0,0,0,.53,0,0,.01,0,0,.47,0,0,.01,.02,.98,.26,.49,0,0,.28,.97,0,.73,.98,0,.26,0,0,0,0,0,.17,.01,.47,0,.06,.74,.01,0,.04,0,0,.16,0,.26,.81,.67,0,0,.14,0,0,0,0,0,0,0,0,.06,0,0,0,0,.54,.17,.72,0,.59,.55,.23,0,.01,.95,0,.09,0,0,0,.04,.56,.29,.61,.11,0,.43,0,0,0,.7,.21,0,.01,.19,.58,0,0,0,0,0,0,0,.72,.02,.23,.01,.1,0,0,.08,0,0,0,0,0,0,.83,.16,0,0,0,.48,0,.03,0,0,0,.03,0,0,.15,.01,.44,0,.71,.02,0,.77,.05,.01,.19,0,0,.03,0,.06,.71,.89,0,0,0,0,0,.01,0,.27,.4,0,0,0,0,.19,.04,0,0,0,0,.64,0,.17,0,0,.6,.02,0,0,.99,.45,.28,0,.37,0,0,0,0,0,.54,0,0,.92,0,.02,0,.12,.26,.72,0,.06,.68,.02,.01,.06,0,.33,.01,.06,.08,0,0,0,.2,0,.18,0,.28,.12,.91,.38,.33,0,0,.98,0,0,0,.76,.86,.2,.66,.01,0,.51,.08,.01,.66,0,0,0,0,.62,.44,0,0,0,0,0,.17,0,0,.47,0,.01,0,.04,.19,.06,0,.71,.31,.05,.03,.99,0,0,0,0,.02,.56,0,.08,.69,0,0,0,0,0,0,.34,0,0,.05,0,.55,0,.01,0,0,0,.08,.03,0,.04,0,0,0,0,0,0,.29,0,.12,.93,0,0,.03,.2,.18,.02,0,0,0,.04,0,0,0,.86,0,0,0,0,0,.03,.21,.01,.67,.19,.34,.07,0,.02,0,.11,0,0,0,.02,0,.01,0,.89,0,0,.01,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,0,.88,.17,.25,.4,0,0,0,.58,0,.3,.03,0,.01,0,.11,.89,0,.95,0,0,.51,0,0,0,.03,0,.06,0,.07,0,.4,0,0,0,.54,0,0,0,0,.96,.88,.41,.16,0,.23,0,0,.67,.42,0,.02,.03,.03,0,.49,0,.5,0,0,0,.38,.02,0,0,.36,.89,.68,.6,0,0,0,0,.01,0,0,0,0,0,0,.01,0,0,.07,.51,.04,.87,.75,0,0,.25,.32,.01,.02,.01,.64,0,.04,0,.91,0,.11,.12,0,0,.06,1,0,.02,0,0,0,0,0,.01,0,.02,0,0,.23,.05,0,0,0,.08,0,.07,0,0,0,0,.1,.17,.05,.24,.84,.01,0,0,0,.51,.32,.36,0,0,0,0,.89,.32,0,0,0,0,0,.03,.83,.79,0,.32,0,0,.05,0,0,0,0,.58,.83,0,.98,.47,.24,.54,.19,0,0,0,0,0,.04,.17,.14,.05,.03,.82,0,0,0,0,0,.05,.04,.03,.01,.05,.25,0,0,.41,.9,.07,.25,.26,0,.01,0,0,0,0,.53,0,0,.53,.99,.16,.41,.53,0,0,0,.67,.02,0,.77,0,0,.09,.24,.2,0,.03,.03,.69,.02,0,.44,.34,0,0,0,.14,.17,0,.22,.02,.09,0,0,0,.64,0,.03,0,0,0,0,0,.96,.65,0,0,0,0,0,.07,0,0,0,0,.02,0,0,0,0,.21,0,.16,.09,0,0,.42,0,0,.01,0,.85,.3,.75,0,0,0,0,0,0,.15,0,.05,.2,0,.03,.48,.12,.14,0,.03,.19,0,.08,0,.19,.19,.19,.05,0,.27,0,0,.04,.44,0,0,0,.04,0,0,.01,.89,0,0,.99,.23,0,0,0,0,.09,0,0,.66,.05,0,0,0,.36,0,0,.26,.6,.2,0,0,0,.04,0,.05,.31,0,.01,.6,0,.64,.03,0,0,0,0,0,.52,.02,0,0,.62,0,.88,0,0,0,.24,.43,.02,.82,0,.9,0,.2,0,.85,0,0,.1,0,0,.33,0,0,.19,0,.32,.74,.07,0,0,.12,.05,0,0,0,.03,.07,0,0,0,0,.9,0,0,.01,0,0,0,.01,.02,0,.01,.95,.14,0,.81,0,.25,0,.81,0,0,0,.01,0,.67,.01,.99,0,.26,.35,0,0,.34,0,.06,.01,0,0,.1,0,0,0,0,0,0,0,0,0,0,0,.85,.56,0,0,0,0,0,.72,0,.05,.31,.85,.24,.16,.55,.77,.92,.62,0,.03,.91,.08,.95,.02,0,0,0,0,.87,0,.21,0,.55,0,.03,.1,0,.53,0,0,.72,.79,.14,0,.04,.09,0,.06,0,.19,0,.58,.18,0,.04,0,.89,.78,0,.67,.2,.05,0,0,0,0,0,.13,.16,.05,.04,0,0,0,.29,.45,.35,0,0,0,.02,.04,.97,0,0,0,.11,.61,0,.22,0,0,.01,.97,.01,.31,.86,0,0,.51,.71,0,0,.8,.22,0,.01,.06,0,0,0,0,0,0,0,0,.24,.01,0,.08,.12,0,.07,.32,0,0,.8,0,.01,.23,.55,0,0,.02,.12,0,.2,.01,.38,.41,.25,0,.35,0,0,.01,.14,.44,0,0,0,.22,.02,0,.01,.54,.03,0,.64,.03,.31,0,.03,.87,.94,0,0,.84,0,.92,0,.05,.88,.05,0,.96,0,0,.13,0,0,0,0,0,.26,0,0,0,.33,.86,.46,.01,1,0,.72,.95,0,.02,.85,.02,.64,.74,.02,.03,.03,.46,.17,0,.15,.37,0,0,0,0,0,.99,0,0,0,0,0,0,0,0,.01,.01,.01,0,0,.15,0,.01,0,.11,0,0,.65,.58,0,.19,0,0,0,0,0,0,.25,0,0,0,.68,.97,.65,.58,0,0,.97,.56,.34,.02,.14,0,.45,0,.66,.08,0,1,.59,0,0,0,0,0,0,.45,0,0,0,0,0,0,.41,.01,1,0,0,0,0,0,.1,0,.14,0,.04,.02,0,.19,.64,.01,.08,.77,.88,.02,0,0,0,0,0,.23,0,0,0,0,0,.98,.25,.42,.32,0,0,.05,.11,0,.02,.05,0,0,.04,0,0,.12,.65,0,0,.44,.48,0,0,.15,0,0,0,.17,0,0,0,.06,.41,0,.03,.66,0,0,.55,.08,.15,0,.23,.06,0,.04,.34,0,0,0,0,0,0,0,0,0,0,0,0,.47,0,.02,0,0,0,.83,.02,.01,0,0,.06,0,.32,.11,.02,0,.3,.02,.02,0,.65,0,.02,.18,.62,0,0,0,0,0,0,.21,.04,0,.87,.01,0,0,.54,0,.01,0,.07,.06,0,0,.21,0,0,0,0,.03,.94,.01,0,0,.37,.41,.36,0,0,0,.89,.01,.3,.01,.11,.05,0,0,0,0,0,.16,.19,0,.06,0,.4,0,0,.99,0,.34,.31,.74,0,.01,.41,.4,.02,0,0,0,0,.06,.96,.23,0,.22,0,0,0,.12,.38,.16,0,0,.07,.18,0,0,.17,0,0,0,.97,0,0,.45,0,0,0,0,.14,.99,0,0,0,0,0,.16,0,.53,.13,.07,0,.64,.06,0,0,.13,0,.02,0,0,.35,.01,.84,0,0,.64,.45,0,.76,0,.84,0,0,0,0,.07,.03,0,.56,.8,0,0,0,0,0,0,.16,0,0,0,0,0,0,0,0,0,0,0,0,0,.03,0,.16,0,0,.58,0,0,.57,0,0,1,.02,0,0,0,0,0,0,.05,.71,0,0,0,0,.43,0,0,0,0,.14,.02,.13,0,0,0,0,0,.13,0,.02,0,.02,0,0,.46,0,.16,0,.16,.33,.03,0,0,0,.01,0,.28,.7,.07,0,0,0,.41,.92,0,0,0,0,0,0,.68,0,.34,0,.14,0,.76,.76,.33,0,.05,.06,0,.73,0,.35,0,0,0,0,0,0,0,.86,0,0,0,.03,.01,0,0,0,0,0,0,.2,0,0,0,0,.74,.04,.02,0,0,0,.03,0,0,0,.75,0,.45,.05,0,.84,0,.52,0,0,.93,0,.06,0,.5,0,.02,.1,0,0,.12,0,0,.05,.35,0,0,.11,0,0,.05,.46,0,0,0,.09,.82,0,0,.81,0,.17,0,0,0,.01,.01,.96,.36,.32,0,0,0,0,0,0,0,.11,0,.52,.07,0,0,0,0,0,0,0,0,0,.74,0,.05,.42,0,.03,.01,.04,0,0,1,0,.02,0,0,.69,.9,0,.74,.02,0,0,.26,.41,.97,.53,.37,.91,0,0,.4,.07,.05,.93,0,.01,0,0,.74,0,.01,0,.51,0,0,.15,0,0,0,.15,0,0,0,0,0,0,.48,0,0,0,0,0,.04,0,0,.01,0,.77,0,.06,0,0,.06,.16,0,.9,0,.5,.01,0,0,.01,0,0,.2,0,0,0,0,0,0,.35,.54,.3,.34,.71,.67,.97,.01,0,0,0,.9,.51,.34,0,.11,.03,.26,.49,.1,.76,0,0,0,0,0,.03,.06,.16,.11,0,.44,0,0,0,0,.01,0,.4,0,.05,.07,0,0,0,.84,.11,0,.62,.33,.96,.32,.29,0,0,0,0,.11,0,0,0,0,.25,.83,.92,0,.02,.13,0,0,.01,0,.01,0,0,0,0,0,0,0,.55,0,.07,.16,.03,.06,.01,.56,.73,0,0,.73,0,.12,.21,.06,0,0,.58,0,.49,.37,.66,.16,0,.72,.61,0,.21,.23,0,0,0,.13,.11,.01,0,0,.01,.01,0,0,0,0,.73,.45,.68,0,0,.01,.09,.73,0,.08,.03,0,.5,0,0,.3,.01,.84,0,.01,.01,0,0,.04,0,.08,0,0,.94,.22,0,.23,0,.02,0,0,.19,.86,0,0,0,0,0,0,0,0,0,0,.87,0,.01,0,.03,0,0,.01,0,0,.07,0,.9,0,.11,0,0,0,.06,0,0,.02,0,0,0,.98,0,0,.04,.33,.03,.11,.97,0,0,0,0,0,.3,0,0,0,0,0,0,0,.03,0,.28,0,0,.65,0,.49,0,0,.17,.36,0];export{a as pvalData};
