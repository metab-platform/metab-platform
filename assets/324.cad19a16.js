const a=[0,0,0,.4,0,.49,0,.98,0,.26,0,.88,.95,0,0,.8,.01,.81,.21,.98,.58,0,.5,0,0,0,0,.34,0,.03,0,0,0,.53,.26,.11,0,0,0,0,.69,0,0,.28,.3,0,.28,.23,.86,0,.01,.67,.02,0,0,0,0,.31,0,0,0,0,0,.19,.05,0,0,0,.97,.76,.31,0,0,.02,0,.76,.27,0,0,.2,0,0,.7,0,.15,.01,0,.45,0,0,.08,.65,0,0,.84,.4,0,.02,.24,0,.25,0,0,.24,0,.21,.84,.36,0,0,.81,0,.33,0,.21,0,.07,0,.01,0,.74,.06,.03,.33,.35,0,0,.07,0,0,.7,0,.53,.09,.02,.92,.4,0,.01,.35,0,.69,0,0,.9,.2,.69,.82,0,.03,0,.73,.52,.73,.96,.3,.9,.55,.01,0,.32,0,.95,0,0,0,0,0,.71,0,.94,0,.92,0,0,.09,.59,.21,0,0,.72,.14,.91,0,0,.28,.7,.49,.32,.01,.39,.07,.15,0,0,0,0,0,.63,0,0,0,0,.97,0,0,.27,0,0,.75,.67,0,.19,0,.38,0,.75,.32,.03,.06,0,0,0,0,0,0,.86,.01,0,.43,.52,.38,0,0,.22,.74,0,.44,.71,.32,0,0,.98,.57,.02,.16,.2,.22,.28,.34,.63,.03,0,.06,0,.99,.41,0,.44,0,.24,.28,0,0,.58,0,.06,0,.63,0,.41,0,0,0,0,.51,.79,0,0,.79,.09,.04,0,0,0,0,.23,0,.07,.18,.48,0,0,.38,.11,0,.12,0,.61,0,.9,0,.01,.15,.27,0,.55,0,.07,.2,0,.35,.58,.84,.01,0,.04,.09,0,.03,0,.54,0,0,.65,0,0,.1,.97,0,0,0,.01,.25,0,.93,.01,0,.02,.01,0,0,.08,.86,0,0,.7,0,0,.01,0,.02,.22,0,0,0,0,.58,0,0,0,.33,0,.63,.5,0,.21,0,0,.22,.37,0,0,.9,.01,.01,.04,0,.78,.01,.53,.44,.21,.36,.92,0,.05,.97,0,0,0,.94,.23,.18,.08,0,0,.05,.15,.46,.2,.02,0,0,.12,.34,0,0,0,0,0,0,.02,0,.24,.84,0,0,.08,0,.67,0,.13,1,0,0,0,.79,.01,0,.62,.83,0,.31,.4,0,0,0,0,0,0,0,0,.99,.02,0,0,0,.67,0,0,0,0,.09,.59,.78,.13,0,.2,0,0,0,0,0,.34,.07,0,.14,0,0,.25,0,0,.78,.01,0,0,.18,0,.01,0,0,0,0,.07,.07,0,0,0,0,.41,.98,.66,0,0,0,.54,.61,0,.7,0,.36,0,0,0,.12,.57,0,0,0,0,.17,0,.09,.02,.1,.94,.08,0,0,.18,0,.57,.65,0,.68,.09,.07,.4,0,.02,.64,.16,.5,.88,.45,0,0,.15,.22,.74,.03,.38,.84,.06,.08,.61,.63,0,.18,.1,0,0,0,0,.14,0,.28,0,.94,0,.1,0,.86,.78,.12,.36,.71,.49,.28,0,0,.07,0,0,0,.41,0,.01,0,.03,.29,0,0,0,0,0,0,.05,0,.22,.41,.69,0,.94,0,0,0,0,.32,0,0,0,.03,0,0,.33,.07,.2,.39,.17,0,.37,.09,.31,.53,0,.18,.64,.77,.78,.11,.01,.46,.07,.02,.03,.04,0,.05,.61,0,0,.01,0,0,0,.89,.19,.03,.13,0,0,.66,.01,0,.18,0,.09,0,.18,0,.39,0,0,.7,0,.32,.29,.56,0,0,0,.12,0,.15,.18,0,0,0,0,.92,.22,.01,0,.02,0,0,0,.28,.45,.48,0,0,.29,.01,0,0,0,.15,.23,.02,.88,.44,.53,.26,.06,.04,0,0,0,.23,0,0,.71,.67,.06,0,.26,.01,0,.27,.22,.48,.31,.12,.2,.19,.01,.18,.41,0,0,.66,0,0,0,0,0,0,0,0,0,.69,0,.53,0,.1,.22,.63,0,0,0,.85,.94,0,0,0,.26,0,.08,.75,.13,0,0,.36,.98,.01,0,.43,0,0,0,0,0,0,0,.28,.18,.13,.52,.04,0,.87,0,0,0,.95,0,0,0,.4,.38,0,0,0,0,.01,.46,.01,0,.22,0,0,0,0,0,0,0,0,.65,0,0,0,0,0,0,0,.09,.89,.77,.04,0,0,0,.47,0,.27,.21,0,.78,.01,.72,0,.93,0,.17,.02,.33,.12,.6,0,.13,.13,.88,.46,.3,.04,.08,0,0,0,.83,.94,0,0,.12,.01,0,.17,.72,.02,0,.21,.88,0,.11,.26,.01,.84,0,0,.9,0,.61,.73,0,.39,.13,.18,.05,.61,.92,0,.48,.14,.01,.04,.26,.49,.02,0,.22,0,0,.49,.01,0,0,.44,0,0,0,0,0,.78,0,.07,0,0,.01,.18,.6,.94,.48,0,.32,.16,.83,.99,.43,.8,.13,0,0,0,.84,.84,.21,.56,.59,.72,0,0,0,0,.87,0,0,.04,.09,0,0,0,0,0,0,.42,0,0,.53,.05,.14,0,.53,.36,.86,0,.34,.53,.99,.96,.01,.88,.5,.01,0,.79,0,.3,0,.4,.42,.8,0,.17,.71,.88,0,.14,.39,.19,0,0,0,.75,.25,.01,.01,0,0,.3,0,.18,.41,.93,0,.52,.93,0,0,.19,.01,.28,.17,.06,.84,.53,.45,.08,.63,.85,.26,.24,.35,.4,.07,.18,.18,.62,.52,0,.02,.62,.47,.02,0,0,.36,.22,0,.78,0,0,.62,.01,0,.91,.37,.5,.82,.44,.01,0,.82,0,0,.91,0,.8,.5,0,.35,.69,.53,.01,.46,.01,0,0,.3,0,0,.72,0,.04,0,.31,.42,0,.33,.29,.29,0,.04,0,0,0,0,.53,0,.02,0,0,.6,0,0,.93,0,0,.67,.01,.95,.8,0,.46,.05,.01,0,0,.36,.01,0,.01,0,0,.75,0,0,0,.08,0,.01,0,0,0,0,.17,0,.73,.26,0,0,.85,.07,.13,.1,0,.01,0,.03,0,.02,.26,.01,.96,.66,0,.15,.59,.87,0,0,.01,.12,0,0,.66,.53,.45,0,.67,.79,0,0,.81,0,.01,0,.03,.63,.04,.01,0,.27,.01,.8,.08,.58,.6,0,0,.18,.01,0,.01,0,0,0,0,.66,.85,0,0,0,.25,0,.29,0,.83,.84,.07,.9,.22,0,.4,0,0,.7,0,.11,.05,0,.27,0,.64,.02,0,0,0,.04,0,.24,0,0,0,.64,0,0,.8,0,.39,.04,.01,0,0,.52,0,0,.41,.78,0,0,.85,.94,.04,.92,.04,0,.34,.01,.01,0,.09,0,0,0,.67,.43,.69,0,0,0,.35,.98,.1,.23,.01,0,.89,0,.06,.54,.15,.57,.58,0,0,.46,0,0,0,.72,.23,.83,0,0,0,0,.68,0,.5,0,.01,0,.08,0,0,.21,.25,0,.92,0,.19,.06,.4,0,.11,.6,.67,.32,0,0,0,.04,.01,.97,0,0,0,0,0,.89,.05,.16,0,.01,.43,0,.23,0,0,0,0,.7,.39,.04,0,0,.65,0,.35,.02,0,.34,.45,0,0,0,.02,1,0,0,0,.44,.18,.04,.9,.9,0,0,.02,.17,0,.04,.63,.62,0,.25,.09,0,0,0,0,.07,0,.02,0,.79,.09,0,0,.65,.41,0,.65,0,0,.17,.1,0,.42,.04,0,0,.02,0,0,.01,0,.9,.02,.29,.98,.89,.01,.05,.78,0,0,.35,0,0,0,0,.04,.95,.3,0,0,.45,.34,.9,0,0,0,.02,0,0,.26,0,0,.06,.14,.9,0,.53,.21,.01,.81,0,.54,.57,.05,.09,.08,0,.18,.19,0,.17,.35,0,0,0,0,.91,.03,0,.34,0,0,.02,0,.65,.97,.35,.22,.21,0,0,0,.16,0,0,0,0,.46,.71,1,.23,.2,0,.01,0,0,0,.58,.03,0,0,.03,0,.03,0,0,0,0,0,.62,.09,0,.91,0,.78,0,0,.26,.85,0,.02,0,0,.12,.76,0,.5,.81,.19,0,.11,.5,0,0,0,0,0,0,.48,0,0,.01,.98,0,.72,.14,0,.09,0,0,.12,.01,0,0,.63,0,0,.45,.09,0,.68,0,0,0,0,.51,.04,0,0,0,0,.01,0,0,0,0,.44,.09,0,.79,0,.07,0,0,.96,.01,0,0,0,0,.07,.05,0,0,0,.23,0,0,0,.6,0,0,0,0,.81,0,.12,0,0,0,.03,.54,0,0,0,0,0,0,0,0,0,.73,.03,.02,.03,.35,0,.07,.13,0,.91,0,0,0,0,0,.1,.7,0,0,0,0,.3,.94,0,0,0,0,0,0,.48,0,.01,0,.96,.18,.81,.5,.44,0,0,.21,0,.34,0,.42,.25,0,0,0,0,0,.3,.29,.67,.01,0,.58,.16,0,0,0,.28,0,.49,.56,0,.16,0,.93,.34,0,0,0,0,.75,0,0,0,0,0,0,.02,0,0,.2,0,.66,0,0,.93,0,.1,.29,0,.01,.07,0,0,.76,.69,.05,.05,.27,.92,0,0,0,.25,0,0,0,0,0,0,.8,.15,.4,0,.7,0,.2,.01,.01,.05,0,0,0,.23,0,0,.04,0,.51,0,0,0,.01,.44,.79,.26,.09,0,0,0,0,.31,0,0,0,.84,.18,.01,.53,0,.02,0,0,0,0,.38,0,0,0,0,.06,.61,0,0,.06,.57,0,.61,.05,.92,.73,.03,.6,0,0,.48,0,0,.01,0,.02,0,0,.78,0,0,0,0,.96,0,0,0,0,0,.03,0,0,0,0,0,0,.52,0,0,0,.17,.07,.21,.16,0,.09,0,.67,0,0,0,0,0,0,0,.73,0,.98,0,0,.18,.17,.62,0,0,0,0,.01,0,0,0,.15,.5,.19,.96,.95,.61,0,0,.37,.28,0,.23,0,.04,.3,.08,.89,.02,.1,0,.55,.11,0,.01,0,0,.01,0,0,.91,0,.27,.68,0,0,0,.4,0,.45,0,.61,0,.24,0,0,.56,0,.04,.04,.61,0,.02,.15,0,0,0,0,.02,.85,0,0,0,.42,.57,.5,0,0,.95,0,0,0,0,.12,0,0,.03,.57,0,0,0,.32,0,0,.01,.5,.48,0,.01,.6,0,.05,.99,0,.28,.74,.24,0,0,0,.12,.9,.1,.88,0,.01,.18,.35,.01,.91,0,0,0,.13,0,0,0,0,0,.42,.85,0,0,.12,.17,.83,.28,.31,0,0,.02,0,.64,0,0,.1,0,.86,.52,0,.06,.46,.41,0,0,0,0,0,.74,0,.06,.08,.46,.99,.25,0,0,.02,.01,0,0,0,.01,0,0,0,0,.55,0,0,0,0,0,.15,0,.19,0,0,.18,0,0,0,0,0,0,0,.14,0,0,0,.27,0,0,0,0,0,.07,0,0,.05,0,0,.86,0,0,.87,0,0,0,0,.03,.74,.67,.49,0,.11,0,0,0,.64,.02,.64,.14,.23,.56,0,.43,.85,0,.68,.11,0];export{a as pvalData};
