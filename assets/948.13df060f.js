const a=[.02,0,0,.38,0,.21,.09,.75,.01,.03,0,.1,.04,0,0,.83,.01,.99,.01,.89,.8,.12,.61,0,0,0,.19,.6,.33,.6,0,.22,0,.18,0,.02,0,0,.04,0,.59,0,0,.98,.68,0,.79,.84,.43,.38,.22,.28,0,0,0,0,0,.29,.16,0,0,0,0,.59,.18,.79,0,0,.33,.67,.61,0,.01,.04,0,.4,.3,0,0,.69,0,0,.63,0,.16,.31,0,.28,0,0,.88,.79,.34,0,.01,.29,0,.92,.43,0,.23,0,0,.28,0,.9,.01,.02,0,0,.56,.01,.47,0,.34,0,.18,.83,.06,0,.32,.15,0,.19,.89,0,0,.07,.97,0,.33,.01,.33,.44,0,.45,.9,.49,.84,.89,0,.43,0,0,.3,.79,.72,.38,0,.34,0,.91,.84,.13,.25,.58,.17,.08,.32,0,.81,0,.43,.04,.21,.01,0,.66,.75,0,.22,.9,.64,0,0,.47,.62,.94,.12,0,.36,.48,.37,0,0,.12,.01,0,.2,.25,.18,.11,.23,0,0,0,0,0,.54,.63,.03,0,0,.11,0,0,.08,.07,.02,.07,.18,0,.13,0,.23,.03,.63,.82,.36,.05,0,.01,0,0,0,0,.74,.46,0,.39,.29,.27,0,0,.83,.13,0,.05,.59,.27,0,0,.07,.09,.29,.26,.1,.2,.05,.51,.31,.01,0,.03,0,.38,.46,0,.38,0,.65,.27,0,0,.43,0,.18,0,.08,0,.14,.06,0,0,0,.25,.11,.01,0,.62,.32,.09,0,0,.13,0,.81,0,.56,.63,.97,.31,0,.67,.75,0,0,.07,.25,.21,.24,0,.98,.08,.03,0,.22,0,.7,0,0,.11,.02,.45,0,.27,.94,.57,0,.03,0,.44,0,0,.42,.28,0,.01,.06,.13,0,0,.02,.5,.01,.81,.96,0,.64,.93,0,0,0,.86,0,0,.98,.14,0,.52,0,0,.01,.22,0,0,0,.99,0,0,0,.34,.6,.01,.58,0,.09,0,.01,.7,.07,0,.36,.3,0,.17,.33,0,.8,.45,.07,.5,.1,.34,.29,0,.7,.71,0,0,0,.04,.44,.89,.84,0,.01,.13,.02,.95,.15,.81,0,.01,.11,.38,0,0,0,0,0,0,.14,0,.16,.49,0,0,.27,0,.08,0,.1,.26,.37,0,0,.68,.33,0,.02,.2,0,.02,.27,0,.01,0,0,0,0,0,0,.76,.28,0,0,0,.35,0,0,0,0,.96,.16,.92,.53,0,.67,0,0,0,0,.01,.52,0,0,.43,0,0,.09,0,0,.06,.82,0,0,.32,0,.28,0,0,0,.1,.12,.77,0,.01,0,0,.32,.06,0,0,0,0,.69,.2,0,.15,.16,.05,0,0,0,.09,.34,0,0,0,0,.84,0,.51,.09,.88,.01,.86,.04,0,.53,0,.25,.87,0,.24,.02,0,.51,0,.31,.46,.01,.12,.53,.2,.2,0,0,.03,.38,.93,.02,.54,.37,.03,.26,.34,0,.13,.36,0,0,0,0,.08,0,.01,.02,.62,0,.66,.76,.65,.15,.02,.12,.53,.01,.55,0,0,.15,.02,0,0,.01,.04,.25,.19,.38,0,0,.59,0,0,0,0,.38,0,.04,.54,.68,0,.42,0,0,0,0,.02,0,0,0,.01,0,.33,.81,.19,.01,.04,.74,0,.21,.06,.01,.8,0,.35,.62,.13,.08,.44,.12,.76,.52,.76,.82,.47,0,.03,0,0,.01,.09,0,0,0,.21,.33,.22,.27,0,.05,.41,.01,0,0,0,.2,0,.8,0,.71,0,0,.17,0,.62,0,.96,0,0,0,.57,0,.02,.43,.82,0,0,.06,.16,.25,.34,0,.01,0,0,0,.1,.51,.02,0,0,.81,0,0,0,0,.36,.39,.05,.09,0,.75,.01,0,0,0,0,0,.98,.02,0,.1,.38,.04,0,.56,.16,0,.46,.02,.02,.25,.09,.2,.06,.03,.3,.75,0,0,.51,0,0,.03,.21,.43,0,0,0,0,.21,.01,.79,0,.08,.27,.17,0,0,.13,.99,.28,0,.04,0,.67,0,.65,.15,.3,.44,0,.19,.45,0,0,.92,.01,.51,0,.01,0,0,0,.02,.36,.18,.02,.66,0,.19,.56,.01,.06,.64,0,.73,0,.4,.1,0,0,0,0,0,.03,.66,.02,.31,0,0,0,.47,0,0,0,0,.05,.03,0,0,0,0,0,.88,.55,.67,.47,.23,0,.11,0,.18,0,.78,.6,0,.23,.45,.42,0,.1,0,.99,.01,.29,.31,.72,0,.66,.18,.82,.9,.23,.15,0,.3,0,0,.01,.05,.92,0,.17,.71,0,.38,.69,.88,0,.43,.14,.09,.48,.51,.26,.45,0,0,.91,0,.02,.07,0,.01,.14,.03,.01,0,.02,.56,.07,.92,.92,.58,.51,.05,.54,0,.05,0,0,.84,.63,.01,0,.1,0,0,0,0,0,.56,0,0,0,0,0,.82,.48,.56,.5,0,.32,.73,.04,.21,.75,.97,.06,.01,0,0,.27,.67,.02,.77,.09,.12,0,0,0,0,.46,0,0,.99,.09,0,0,0,0,0,0,.41,0,0,.05,.1,.81,0,.36,.74,.55,0,.1,.82,.17,.89,.66,.41,.72,.22,0,.13,0,.04,0,.09,.14,.6,0,.31,.38,.01,0,.04,.45,.09,0,0,0,.28,.94,.29,.14,0,0,.09,.07,.95,.02,.08,0,.01,.03,.02,0,.15,.41,.15,.1,.6,.77,.59,.85,.54,.5,.57,.21,.56,.07,.11,.59,.05,.15,.06,.65,0,.58,.78,.46,0,0,0,.01,.23,0,.63,0,0,.59,.51,0,.68,0,.45,.23,.64,0,.1,.24,0,0,.34,0,.78,.72,0,0,.07,.85,.74,.16,.02,.13,0,.47,0,0,.32,.04,.88,.01,.71,.12,0,.81,.21,.91,0,.38,.21,.78,.01,0,.13,.08,.1,0,0,.28,0,0,.56,0,0,.13,.58,.68,.88,0,.09,.87,0,.17,0,.05,0,0,.68,0,0,.42,.95,0,0,.2,0,0,.04,0,0,0,.39,0,.06,.01,.01,0,.32,.9,.08,.02,0,.2,0,.15,0,.94,.03,0,.37,.2,0,.98,.04,.07,0,0,0,.21,0,0,.02,.16,.05,0,0,.99,0,0,.41,0,0,0,.13,.09,.05,.06,0,.41,.6,.41,.66,.03,.47,0,0,.99,.65,0,0,0,0,0,0,.84,0,0,.15,0,.83,0,.18,0,.26,.11,.22,.02,0,0,.03,0,0,.34,0,.07,.79,0,.22,0,.34,.01,0,0,0,.35,0,.35,0,.26,0,.05,0,0,.77,0,.22,.01,.03,0,.85,.16,0,0,.79,.63,0,0,.45,.3,.24,.31,.34,.37,.87,.35,0,0,.24,0,0,0,.58,.73,.39,0,0,0,.37,.32,.68,.32,.05,0,.11,0,.31,.84,.46,0,.63,0,0,.06,0,0,0,.34,.5,.67,.02,.15,.72,.05,.15,0,.29,0,.19,.19,.04,0,.07,.31,.12,0,.21,0,.28,.1,.25,0,.29,.62,.07,.14,0,0,0,.02,.68,.56,0,0,0,0,0,.45,.7,.33,0,.01,.01,0,.95,0,0,0,.01,.31,.8,.03,0,0,.5,.48,.19,0,.01,.72,.18,0,0,0,.23,.36,0,.02,.01,.02,.29,.04,.47,.78,0,0,0,0,0,0,.89,.23,0,.53,.04,0,.07,0,0,.69,.01,.32,.02,.81,.52,0,0,.05,.94,0,.64,0,.16,.42,.01,0,.03,.02,0,.94,.63,.29,.02,.01,.01,.64,.67,.99,.88,.58,0,.6,.75,0,0,.31,0,.39,0,0,0,.15,.42,0,0,.83,.34,.08,0,0,0,.84,.01,0,.32,0,0,.01,.7,.36,0,.62,.79,0,.81,0,.08,.21,.22,.56,.27,0,.25,.51,0,.72,.3,0,.3,0,0,.54,.88,0,.93,.09,0,.02,0,.17,.34,.85,.08,.91,0,0,.02,.03,0,0,0,0,.92,.45,.46,.78,.53,0,.69,0,0,.01,.31,0,0,.47,.11,0,.86,0,.86,0,0,0,.07,.9,0,.22,0,.46,0,.01,.6,.66,0,.05,0,.01,.91,.92,.07,.34,.81,.35,0,.64,.08,0,.34,0,0,0,.05,.17,0,0,.44,.95,0,.08,.65,0,.02,0,0,.33,.69,0,0,.94,0,0,.99,.04,.96,.04,0,.19,0,0,.4,.89,0,0,0,0,.87,0,0,0,.01,.01,.9,0,.53,0,.74,0,0,.31,.93,0,0,0,0,.14,.12,0,0,.01,.65,0,.04,0,.61,0,0,0,0,.19,0,.71,.31,0,0,.05,.94,0,0,0,.14,0,.03,0,0,0,.98,.72,.16,.57,.4,0,.79,.12,0,.27,0,0,.01,0,0,.07,.26,0,.15,.01,0,.04,.07,0,0,.01,0,0,0,.01,0,0,0,.23,.98,.78,.08,.92,.03,0,.02,0,.1,0,.6,.83,0,0,0,0,0,.09,.86,1,.03,0,.45,.03,0,0,0,.48,0,.09,.15,0,.19,0,.2,.87,0,0,0,0,.44,0,0,0,0,0,0,.04,0,0,.02,0,.15,0,0,.38,0,.02,.27,0,.07,.27,0,.12,.54,.23,.91,.16,.56,.61,0,0,0,.57,0,0,0,0,0,0,.91,.09,.13,0,.82,0,.17,.13,.13,.23,0,0,0,.01,0,0,.32,.03,.2,0,0,0,.04,.62,.9,.3,.55,.02,0,0,0,.47,0,.03,0,.18,.77,.02,.94,0,.45,0,0,0,0,.76,0,0,0,.35,.07,.18,0,0,.04,.3,0,.32,0,.24,.92,.11,.02,0,0,.06,0,0,0,0,.06,.04,0,.37,0,0,0,0,.31,0,0,0,0,0,.78,0,0,0,0,0,.02,.49,0,0,0,.72,.4,.1,.39,0,.02,0,.87,0,0,0,0,0,0,0,.97,0,.24,.02,0,.97,.06,.98,0,0,0,.01,.84,0,.02,0,.26,.78,.48,.31,.35,.35,0,0,.02,.84,0,.01,0,.74,.22,.16,.81,.11,.41,0,.84,.72,0,.89,.21,0,.62,0,.28,.27,0,.02,.38,0,0,0,.89,0,.14,0,.84,0,.31,.01,.04,.42,0,.02,0,.54,0,0,.35,0,0,0,0,.02,.72,0,.01,.54,.06,.17,.83,0,0,.62,0,0,.54,.06,.36,0,0,.98,.12,.01,0,0,.8,0,0,.01,.23,.28,0,0,.37,0,.92,.31,0,.78,.04,.18,0,.01,0,.79,.47,.05,.92,0,.01,.76,.51,.8,.81,0,0,0,.05,0,0,0,0,0,.09,.57,0,0,.38,0,.33,.09,.28,0,0,.02,0,.67,0,0,.72,.29,.1,.79,0,.71,.18,.66,0,0,0,0,0,.16,.01,0,0,.1,.26,0,0,0,.5,.5,0,.02,0,0,0,.12,0,.18,.93,0,0,0,0,0,.01,0,0,0,0,.9,0,0,0,0,0,0,0,.12,0,0,.1,.41,0,0,0,0,0,.23,0,0,.04,0,0,.17,0,.01,.6,0,0,0,0,.53,.28,.04,.21,0,.51,0,0,0,0,.26,.11,.34,.48,.05,.08,.1,.12,0,.1,.95,0];export{a as pvalData};
