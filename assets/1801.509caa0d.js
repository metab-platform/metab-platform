const a=[.21,.64,.74,.57,.21,0,.2,.01,.03,.28,0,0,.12,.29,0,.18,.86,.5,.57,.32,.99,0,.29,0,.01,.67,0,.01,.12,0,.08,.01,.79,.01,0,.81,.15,0,.01,.58,.06,.27,.05,.2,.43,0,.22,.99,0,.01,.43,.03,.26,.59,0,0,.03,0,0,.09,0,.06,.03,.75,.31,.01,.07,0,.97,.93,.55,.48,0,.19,.28,.15,.03,0,.58,.09,.21,.3,.34,.2,.09,0,.71,.28,.5,.01,0,.42,.21,.03,.6,.04,.19,.26,.01,0,.62,.06,0,.31,0,.19,0,0,.75,0,.22,0,.2,.78,.22,.46,.86,.01,.15,.09,.38,.01,.14,.66,.46,.03,.06,.11,.06,.13,0,.01,.58,0,.33,.09,0,.18,.01,.52,0,.19,0,.54,.09,.44,.79,0,0,.24,.11,.37,.98,.95,0,0,.21,.04,.19,0,0,0,0,.02,.23,0,.93,.02,0,.14,.06,.03,0,0,.91,0,.48,0,0,.52,0,.9,.61,.23,0,.71,.4,.05,0,.02,.44,0,.34,.01,.01,.88,0,0,.92,.06,.02,.29,.23,.44,.61,0,.45,0,0,.87,0,0,.15,.05,0,.53,.5,.02,0,0,0,0,0,.88,.06,.24,0,.01,0,.01,.75,.98,.62,.69,.05,.06,0,0,0,.49,0,0,0,0,.2,.06,.64,.68,.85,.42,0,.08,0,.19,0,0,.4,.6,.01,.72,.51,0,.68,0,0,0,.03,.03,.11,.91,.84,.37,.47,.54,.33,.45,0,0,.32,0,0,0,0,.93,0,.32,0,.03,0,.08,.56,0,.8,.23,.14,.03,0,.89,.63,0,.86,.87,.2,.71,.01,.48,.84,0,0,0,.14,.93,.05,.25,0,0,0,0,.37,.21,.06,0,0,.17,0,0,.31,0,.45,0,.05,.03,.26,.14,.09,.67,.01,0,.1,0,0,.08,.22,.86,.12,.3,.59,0,.12,0,.01,0,.04,0,.57,0,.03,.06,.03,.85,.06,.22,0,0,.9,.23,0,.33,0,.42,0,.99,.02,0,0,0,.03,.21,.17,0,.35,.74,.39,.76,.6,.92,.21,.71,.57,.4,.14,.09,.55,.03,0,.81,0,.63,0,.82,.12,0,.18,.22,0,.54,.02,.04,.04,0,.45,.13,0,.1,0,.83,0,.52,0,0,.18,.05,.06,.02,.03,.36,.36,.09,0,0,.01,0,.15,.42,0,.5,.91,.28,.55,0,0,.19,0,.12,.01,0,.51,.44,.15,.09,.51,0,.6,0,.08,0,0,.64,0,.51,.24,.1,.62,0,.8,.33,.92,.72,.8,.51,0,.15,.25,.63,0,.36,.91,.74,.98,0,.02,.02,.05,.43,0,0,.01,.05,.27,.4,.58,.01,.19,0,.05,.16,0,.19,.97,0,0,0,.02,.19,.08,.29,0,1,.59,0,0,0,.04,.2,0,0,0,0,0,.62,.58,.19,.08,.66,0,.16,.41,.04,.61,.12,0,0,.71,0,.02,.03,0,.59,0,.13,.89,0,.12,0,.04,.38,.02,0,.03,0,0,.24,.73,.63,.17,.86,0,0,0,.79,.61,0,0,.22,.94,.88,.34,.25,0,.08,.2,.4,.01,.02,.23,.97,.39,.05,0,.67,.03,.02,0,0,0,0,.7,0,.01,.07,.73,.74,.66,.01,.21,.26,.11,.87,0,.41,.91,.56,.16,0,.99,0,0,.74,.82,0,.5,.01,.22,0,.81,.93,.76,.04,.07,.06,.01,.14,0,.55,0,.08,.18,0,0,.35,.41,0,.11,0,.59,0,.42,0,.15,0,0,.98,.01,.02,.27,0,0,.31,.19,0,.41,.67,0,.64,.35,.5,0,.04,.56,.98,.72,.03,.91,0,.24,0,.27,0,.33,.5,.27,.24,.77,0,0,0,.02,.71,.75,.92,.64,0,.53,.59,0,.01,.51,.23,.84,.19,.9,.8,0,.06,.02,.35,.25,.04,.02,.86,.11,.4,.19,.58,.01,.08,.32,.9,.55,0,.84,0,.01,.37,.49,.87,.45,0,.1,.57,.19,0,.09,.35,.33,.11,.18,0,.34,.03,.51,0,.42,.08,0,0,.04,.55,.03,.94,0,.96,0,0,.9,.71,.16,0,0,0,.24,.04,.45,.01,.51,.46,.41,.49,.17,.46,.34,.01,.34,.01,.57,.2,.03,.99,0,.06,0,0,.16,.05,0,.33,.03,.5,.38,0,.49,.81,.61,.01,.58,0,0,0,.32,0,0,0,0,0,1,.01,.65,.01,.58,0,.13,.07,0,.04,.34,.27,.29,.25,0,.96,.34,.17,.33,.05,.01,0,.08,0,.44,.79,.35,.42,.14,.22,.04,.26,.29,0,.12,.82,0,.22,0,.09,.17,.11,.38,.06,.06,0,0,.14,.05,0,0,.07,0,0,.01,.02,.56,0,.73,.46,.67,0,0,0,.11,.17,.01,.88,.21,.34,0,0,.1,.01,0,0,.12,.54,.2,0,0,0,.1,.03,.66,.05,0,.41,.21,.06,.02,.18,0,.69,0,.04,.09,.82,.22,0,0,.12,.87,.62,.07,.45,.9,.8,.67,.09,.18,.26,.68,0,.54,0,.1,0,0,.01,0,.09,.01,0,0,.1,0,.16,.82,.52,.01,.22,.01,.59,.22,0,0,.53,.25,.31,.05,.53,0,.86,0,.14,.38,.05,0,.53,.01,.01,.73,.72,.26,.18,.02,.4,0,.93,0,.56,.21,0,.08,.92,.48,.28,.01,.86,0,.22,.41,.83,.09,.62,0,0,0,.18,.37,.01,.08,0,0,.58,.49,0,0,.09,.31,.03,0,.17,.09,0,0,0,0,.01,.76,0,.07,.95,.26,.48,.13,.55,.18,.22,.97,.01,.25,.83,.17,.01,.14,0,0,0,0,.15,.27,.04,0,.55,.04,.11,.68,0,.87,0,.48,.39,.47,.26,0,0,.25,0,.31,0,.13,.13,.73,.16,0,.61,0,.55,.23,0,.07,.92,.18,0,0,.86,.01,.04,.2,.54,.88,.07,0,.3,0,.12,.01,.01,0,0,.02,.91,.68,.3,0,0,0,.21,.95,.73,.15,0,0,.88,.19,0,.9,.39,0,0,.51,.63,0,.47,.11,0,.06,.01,.98,0,.17,0,.38,.4,.2,0,0,.14,.35,.37,.79,.99,.34,.41,.03,0,0,.73,0,.01,.36,0,0,.48,.19,0,.9,.77,.01,.58,.3,0,0,.85,0,.15,.94,.16,.97,.16,.94,0,.04,.01,.86,.05,.08,.39,0,.11,.07,.55,.26,.16,.94,.19,0,.37,.3,0,.22,0,0,.08,.04,.98,.05,0,.3,.95,.37,.27,.11,0,0,.22,.2,0,0,.24,.01,.48,.3,.6,0,.66,.63,0,.32,.08,.83,.02,.12,.68,.01,.77,.52,.43,.67,.36,.36,.13,0,.5,.03,.02,.3,.24,0,0,0,.35,.16,0,.42,.87,.06,0,.72,0,.05,.11,.2,0,.02,.19,.72,.12,.16,0,1,0,0,0,0,0,.46,.09,.34,.58,.42,.5,.12,.09,.04,.4,.48,.11,.11,.4,.36,.54,.27,.01,.55,.94,.02,0,.53,.18,0,.08,0,.02,.47,.85,.24,0,0,0,0,0,0,.1,.26,.25,.04,0,.17,.01,.81,.08,.01,.41,0,0,.05,0,.03,.29,.76,.65,.86,.02,0,.3,.05,0,0,0,.88,.01,.36,0,.29,.27,.24,.51,.81,0,0,0,.27,.23,0,.88,.93,.06,.01,.02,0,.88,.19,.11,.07,0,.58,.92,0,0,.33,.06,.05,0,.92,.1,0,0,.01,.92,0,.57,.55,.01,.16,.06,.01,0,.1,.16,.02,0,.44,.2,0,0,0,.37,.96,0,0,0,0,0,.2,.03,.06,.08,0,0,0,0,.05,0,.07,.85,.3,.26,0,.78,.14,0,0,.45,.14,.15,.01,.69,.1,.72,.11,.82,0,.02,0,.1,0,0,.17,0,0,.56,.97,.03,0,.76,.03,.47,.13,0,.57,0,.01,.02,.04,.12,0,0,.05,.01,.07,.04,0,.47,.22,.23,0,.11,.04,.35,.57,.57,0,.02,.23,0,.16,0,.74,.56,.04,.08,0,.87,0,0,0,.09,.24,0,.64,.31,.85,.28,.8,.03,.43,.1,.61,.5,.73,.02,.03,.45,.84,0,.37,0,0,.02,.09,.83,.58,.19,0,1,.07,0,0,.97,0,.15,0,.29,0,.83,.94,.02,0,.43,0,.26,.28,0,0,.12,.02,0,0,0,.62,.6,.92,.83,.6,.65,.6,0,.13,.04,.52,0,0,.03,.6,.01,.03,0,.65,.01,.34,.78,.03,0,0,0,0,.11,0,.53,.05,.5,.85,0,0,.21,0,.56,.01,.65,0,.35,0,.62,.25,0,.2,0,.04,.83,0,0,.47,.27,.01,.7,0,.02,.44,0,.08,.41,.09,.04,.93,.35,.19,.57,0,0,.1,0,0,.09,.13,.21,.32,.05,.07,.59,0,0,0,0,0,.17,.03,.05,.01,.01,.02,.7,.15,.09,.03,.07,0,0,.13,0,.49,0,.51,.01,0,.03,0,.08,.33,.63,.97,.72,.73,.41,0,.35,.67,.06,.9,.9,0,0,0,.01,.72,.23,.54,0,.01,0,.78,.42,.97,.03,.89,.17,.02,.8,0,.58,0,.03,.81,0,.99,.18,0,.3,0,0,.01,.82,.12,.03,0,.39,0,.24,0,.19,0,0,0,0,.82,.73,.57,.04,.1,0,.76,.01,0,0,0,0,0,0,.01,.25,0,.05,.34,.06,.88,.72,.05,.37,0,0,.02,0,0,.16,.02,.03,.08,.14,.54,.03,.57,0,0,.03,0,0,.54,.65,.92,.11,.68,0,.11,.31,0,.32,0,0,.01,.93,.42,1,.53,.17,0,0,.87,0,0,.45,.47,.1,0,.69,.71,0,0,.53,0,.26,0,.02,0,.52,.09,.09,.86,.85,.12,.47,.58,.67,.49,.25,.45,.02,.71,.23,0,.9,.75,.76,.1,.42,.16,.01,.06,.01,.1,.76,.82,.03,0,.04,.96,.18,.61,.86,.52,.13,0,0,.44,.45,.94,.37,.68,0,.07,.74,.02,0,0,.37,.63,.95,.12,0,0,.02,.02,.02,.58,.02,0,0,0,0,.9,.87,0,.12,.78,.42,0,.65,.47,.1,0,.57,0,.78,.52,.29,0,.29,0,.5,.17,0,.01,0,.36,0,.6,.41,.04,.05,.78,.12,.06,0,0,.47,.14,.24,.75,.61,.75,0,0,.38,.36,.34,.06,.49,0,.46,0,.01,0,.16,0,.94,.37,.75,.38,0,.01,0,.68,.99,.83,.02,.61,.15,.3,.06,0,0,.52,.11,.22,.08,.15,.07,.19,.56,.01,.09,.05,.05,.97,.01,.02,0,0,.04,.75,.52,.7,.76,.66,.2,.09,.92,0,.2,.1,.75,0,0,.14,0,.03,.21,.03,.75,0,.34,.04,.98,.26,.05,.07,0,.23,0,.02,.07,.88,.08,.34,0,0,.18,.01,.99,.03,.58,.26,.96,0,.87,.19,.52,.37,0,.68,.75,.72,.12,.5,.6,.11,0,.3,0,0,.32,.69,.3,.96,.48,.01,.48,.74,.66,.29,0,.13,.01,.08,.03,.23,0,.49,.26,.76,.17,.75,0,.24,0,.71,.01,.45,.56,.03,.65,.04,0,.04,.19,0,.13,.41,.09,0,.88,0,.09,.99,.86,.48,0,.74,.24,.04,.06,0,.34,.07,.52,.63,.57,.68,.32,.4,.02,.02,.27,0,0,.04,.25,.69,.82,.61,.67,0,0,0,0,.93,.26,.03,.71,.03,.44,0,0,.74,.09,.01,.15,0,0,.28,0,.44,.09,.26,0,0,.88,.06,0,.31,.1,.64,.13,.7,0,.92,0];export{a as pvalData};
