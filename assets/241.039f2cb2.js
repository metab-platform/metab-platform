const a=[.76,.2,.2,.36,.04,.2,.27,0,.1,0,.81,.56,.33,0,.34,.24,.91,.72,.28,.21,.26,0,.11,.01,.31,0,0,.35,.65,0,0,0,0,.03,.02,.24,.08,.59,0,.05,.78,0,.27,.97,.16,.7,.24,.05,0,0,.09,.82,.46,.15,0,.7,.52,0,.06,.02,0,0,0,.7,.12,0,0,.11,.38,.93,.69,.03,0,0,.02,.51,.04,0,.74,0,.01,.15,.92,0,.3,0,.03,.6,0,.55,0,.57,0,.61,.6,.23,.07,.12,.97,0,.96,0,0,.42,0,.91,0,0,.02,0,.9,0,.25,.51,.2,.23,.06,0,0,.02,.85,0,.05,.99,.14,0,.01,.01,0,.04,0,.25,.83,0,.64,.11,0,.01,0,.52,0,.73,0,.01,.41,.57,1,.55,0,.21,0,0,.97,.03,0,0,.42,.63,.26,.21,0,0,.67,0,0,0,0,0,.05,.05,.48,0,0,0,.02,0,.62,0,0,.01,0,.45,.16,.97,0,.52,.86,.03,0,.97,.9,0,.88,0,0,.03,0,.69,.68,0,.37,0,.01,.91,.31,0,.46,0,0,.99,0,.88,.5,.1,0,0,.9,0,0,0,.01,0,0,.08,0,.02,0,0,0,.01,.52,.7,.39,.44,.12,.4,.43,.2,.02,.81,0,.12,0,0,0,0,.87,0,.29,.78,0,0,0,.01,0,.15,.99,.01,.01,.95,.93,0,0,0,.03,0,0,0,.31,.01,.03,.57,.01,.06,.02,.83,0,0,.01,0,0,0,.53,.16,0,0,0,.09,0,0,.01,0,0,0,.01,.26,.24,.01,.02,0,.06,.22,0,.94,.05,.01,.2,0,0,.68,0,.82,.05,.73,.54,0,0,0,.09,0,0,.42,.24,0,0,0,.01,.77,.9,0,.02,0,.03,.49,0,.45,0,0,.09,0,0,.54,.19,.86,.15,.02,.81,0,.18,0,0,0,.04,0,.87,.64,0,.04,0,.62,.16,.45,0,0,1,.05,.05,.03,0,.53,0,.19,.48,.24,0,0,.36,.06,.73,0,.92,.78,.69,.33,.77,.02,.06,.45,0,0,0,.4,.47,.06,.16,.23,0,.34,.94,.27,.09,.02,.01,.06,0,.58,.22,0,0,0,.13,.21,.02,0,0,.36,0,.19,0,.11,.11,.18,.01,.64,.22,.11,.05,.63,0,0,0,.37,.03,.14,0,.3,.84,.01,.03,0,0,0,0,.53,0,0,.18,0,.56,0,0,0,0,.06,.43,.59,0,.01,0,0,.12,0,.02,0,.48,.92,.32,.77,.01,.17,0,.08,.03,.98,0,.06,0,0,.01,0,0,.58,.01,0,0,.02,0,0,.73,.8,.44,.57,.04,.02,.01,.05,0,.71,0,0,0,.78,0,.68,0,.32,.72,.03,.25,0,0,0,0,0,0,0,0,0,0,.31,.01,.08,.47,.28,0,.93,0,.02,.21,0,0,0,.93,0,.34,.02,0,.96,.63,.52,.46,0,.06,0,0,.91,0,0,0,.93,0,.02,.03,.25,0,.18,0,0,.02,.39,.01,0,0,0,.4,1,.7,.58,0,.46,.03,.42,.61,0,.01,.27,.38,0,0,.59,0,.05,0,.01,0,.55,.12,0,.01,.21,.91,.85,.25,0,0,.01,.05,.42,0,0,0,.03,.18,0,.29,0,0,0,.37,.54,.62,.54,.97,0,.73,.75,.13,0,.22,.1,.03,0,.02,.48,0,.56,0,0,0,0,.14,.03,.18,0,.3,0,.07,0,0,0,0,0,0,.72,.12,0,.08,0,.27,0,.07,0,0,.06,.07,.17,.17,.05,.99,.36,.17,.35,0,0,.25,.02,.72,0,0,.01,.13,.88,.82,0,0,0,0,.07,.05,.54,.9,.99,.09,.08,0,0,.02,0,.01,.01,.54,.69,.08,.32,.48,.29,.02,.01,.01,.05,0,0,0,.07,.08,.09,.38,0,.57,0,0,0,0,0,.47,.55,.86,.01,.54,.56,0,0,.16,.84,.06,.29,.24,0,.4,.22,0,0,0,.07,0,0,.18,.53,.84,.36,.46,.09,0,0,.65,.3,.12,.34,0,0,.96,0,.03,.01,.03,.49,.06,0,.01,.32,.32,0,.23,.43,0,.59,0,.52,0,.28,0,0,0,.51,0,.04,0,0,0,0,.25,.02,.13,0,.37,0,0,0,.06,0,0,.01,0,.12,.02,0,.07,0,.67,0,.81,.17,.02,0,.15,0,0,.09,0,.63,.65,.52,0,0,0,0,.05,0,.67,.05,.9,.79,0,.13,.44,.04,.42,0,.14,.05,.21,.02,0,.72,.44,.01,.01,0,.14,0,0,.05,.84,0,0,.01,0,0,0,.33,.23,0,0,.48,.76,.08,0,0,0,0,0,.02,.06,.15,.42,0,0,.25,0,0,.18,.06,.69,0,.01,0,.32,0,.97,.1,0,.01,.1,0,.24,.01,0,.54,0,0,0,.08,0,0,0,.45,.12,.87,.06,.01,.3,.73,.99,.49,.91,.03,.99,0,.97,0,.68,0,0,.01,0,0,.19,0,0,.63,0,.01,.52,.18,0,.14,.11,.15,.02,0,0,.11,.68,.01,0,.03,0,.65,0,0,.51,.86,0,0,0,.34,0,0,.98,.83,0,.36,.13,.12,0,.19,0,.36,0,.87,.07,.49,0,.95,0,.05,.14,0,0,.15,0,.49,0,.02,.12,.68,.25,0,0,0,.02,0,0,0,0,0,0,.13,.4,0,0,0,0,0,.9,0,.27,.68,.89,.46,.57,.65,.42,.08,.72,0,.93,.44,.09,.26,.19,0,0,0,.23,.77,0,.06,.32,.42,0,.86,.03,0,.95,.08,0,.66,.29,.17,0,.55,.36,0,.5,0,.11,0,.23,.98,0,.17,0,.65,.28,0,.4,.86,.03,.14,0,0,.02,0,.82,.33,.03,.06,.01,.09,0,.88,.06,.49,0,.02,0,.08,.14,.82,0,0,0,.06,.18,0,.28,0,0,.02,.37,0,.81,.45,0,.01,.16,.78,0,0,.01,.13,.03,0,.8,0,0,.1,0,.04,.01,0,0,.13,.17,.03,.01,.88,.01,.48,.03,0,0,.99,0,0,.77,.31,0,.01,.01,.27,.17,.55,0,.12,.3,.08,0,.04,0,0,.09,.81,.97,.05,.01,.01,.29,.89,.03,.02,.92,0,0,.53,.18,.88,.4,.01,.25,.02,0,.38,.51,0,.75,0,.03,.8,.09,0,.86,0,.1,0,.02,.27,.01,0,0,.56,0,0,0,.31,.45,.55,.03,.99,0,.6,.87,0,.33,.13,.06,.29,.46,.41,.3,.01,.96,.3,.01,.74,.67,.01,0,0,0,0,.69,0,0,0,.13,.32,.54,0,.04,.23,.25,0,.31,0,.07,0,.36,0,.32,0,.06,.5,.43,0,.81,0,0,0,0,.02,0,.93,.15,.01,.39,.78,.51,.58,.19,0,.16,.31,.48,.9,.61,1,0,.04,0,.79,.36,0,.77,.89,0,.01,0,.01,0,.31,.51,0,0,.01,0,0,0,.68,.3,.52,0,0,.55,0,.76,.27,0,.64,0,.05,.84,0,.79,.53,.15,.67,.84,.02,.08,0,0,0,0,0,.14,.01,0,0,.09,.02,.24,.89,.41,.08,0,0,.01,.01,0,.05,.11,.02,.59,.47,0,0,.11,.57,0,.27,.2,.05,0,.01,.75,0,.12,0,.35,0,0,0,.55,.61,0,.44,.87,0,0,.74,0,.73,.9,.16,.22,0,.57,.98,0,0,0,.01,.2,0,0,0,.09,0,.01,0,.37,.41,.02,0,0,0,.64,0,.01,.62,0,.82,0,.71,.15,.01,0,.31,.05,.02,0,.31,0,.03,.77,.43,0,0,0,.02,0,0,.04,.01,0,.97,.02,.07,0,.91,.04,.06,.24,.13,.77,0,0,.31,0,0,.01,.19,.02,.46,.01,0,.02,.04,.01,.06,.23,0,.45,.35,.01,.77,.1,.14,.98,0,0,0,0,.01,.07,.7,0,.72,0,.42,0,.01,.51,0,.8,0,.92,.66,.58,0,.89,.02,0,0,.01,0,0,.7,.32,0,.7,0,0,0,0,.31,.81,.28,0,.15,.25,0,0,.79,0,.03,0,.93,.02,.18,.91,0,0,.27,0,.62,.75,0,0,.01,0,0,.6,0,.4,.94,.73,.16,.86,0,.01,0,.01,0,.06,0,0,.99,.03,.32,.19,0,.63,.87,0,.55,0,.29,0,0,0,0,.04,.06,0,1,.43,0,.06,0,0,.01,0,.97,0,0,0,.07,0,0,.01,0,0,.02,.05,0,0,.01,0,.58,0,0,.59,0,0,.2,0,0,.66,0,.01,0,.02,0,0,0,.07,.96,0,.05,.07,0,.32,0,0,0,0,.32,0,.89,0,.01,0,0,0,.95,0,.01,0,0,0,0,.06,0,.55,0,.08,.37,.69,0,.93,0,.34,.03,.66,0,.33,0,0,.03,.57,.32,0,.01,0,0,0,0,.13,0,.48,0,.6,0,.82,.25,.81,0,.75,.75,.07,.11,0,.95,0,0,.01,0,0,0,.02,.52,0,0,.15,.5,.9,0,0,0,.66,0,.01,.09,0,0,0,0,.98,.06,.16,0,0,0,.81,0,0,0,.88,0,.61,0,0,.15,0,.22,.13,0,.69,0,0,0,.4,0,.02,.94,0,0,.02,0,.66,.21,.13,0,0,.33,0,0,0,.49,0,.13,.11,.09,.59,.14,.01,.37,0,.1,0,0,0,.08,.29,.09,.04,.18,0,0,.01,0,0,.01,0,.43,0,.8,.7,.38,0,.15,0,0,0,0,0,0,.33,.04,.71,.31,0,.04,.37,.01,0,0,.33,0,.09,0,0,.7,.88,.24,.64,.95,0,0,.01,.01,.06,.92,.84,.86,0,0,.51,.08,.44,.48,.16,.02,0,0,.95,0,.15,.01,.73,.93,.15,.32,0,0,0,.89,0,0,.1,0,0,0,0,0,0,0,0,0,0,.99,0,.89,0,.63,.02,.1,0,.26,.41,.29,0,.57,0,.7,.01,0,0,.59,0,.06,.12,0,.02,0,.46,0,.3,.33,.22,.48,.22,.48,.26,.69,0,0,.06,0,.89,.01,.8,0,0,.06,.08,.23,.03,.3,0,.71,0,.23,0,.03,0,.72,.81,0,.55,0,0,0,.37,.26,.01,.14,.06,.04,.01,0,0,0,.63,.78,.08,0,.58,.43,.03,.68,0,0,0,.03,.53,0,0,0,0,.14,.82,.51,.02,.19,.06,.02,0,.36,0,.09,0,0,0,0,0,0,0,.22,0,.12,.38,.36,.25,.03,.88,.25,.01,0,.71,0,.62,.58,.74,0,0,.69,0,.78,.11,.24,.77,.07,.42,.05,0,.84,.07,.03,.2,0,.32,.32,.03,0,0,.16,.01,0,0,0,.01,.24,.57,.79,.01,0,0,.64,.01,.98,.88,0,0,.28,.91,0,.89,0,.35,.01,.25,0,.06,0,.44,0,.83,0,.53,.35,.01,.02,.15,0,.27,0,0,.58,.25,.02,0,.01,0,.04,0,0,0,0,.05,.46,0,.15,0,.01,0,0,.2,.01,.26,.03,0,.75,0,.03,0,0,.13,.04,.01,.13,.02,.03,0,0,.81,0,0,.04,.37,.22,.08,.92,0,.02,.01,0,0,.48,0,0,.18,0,.01,0,0,.53,0,.83,0,0,.14,.17,.11,.03,.07,.12,.47,0];export{a as pvalData};
