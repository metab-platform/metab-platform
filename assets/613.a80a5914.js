const a=[0,.61,.84,.28,.99,.06,.02,.57,.96,.33,.01,.21,.02,.86,.03,.48,.51,.9,.07,.14,.61,.49,.86,.1,.19,.99,.37,.7,.29,.13,.64,.3,.17,.01,.17,.06,.04,.05,.32,.19,.24,.73,.56,.58,.64,.01,.58,.01,.01,.02,.65,.01,.02,.58,.13,.1,.13,.05,.47,.68,.71,.47,.21,.39,.17,.05,.92,.02,.23,.8,.6,0,.07,.5,.74,.28,.06,.66,.38,.04,.48,.99,.91,.89,.11,.64,.93,.51,.92,.74,.04,.14,.12,.52,.11,0,.14,0,.12,.25,.51,.35,.01,.19,0,.97,.61,.25,.26,.01,.88,.19,0,.06,.89,.77,.19,.01,.6,.53,.71,.05,0,.87,.23,.02,.66,.57,0,.1,.07,.9,.98,.11,0,.44,.44,0,.04,.01,.8,.01,.42,.66,0,.05,.48,.04,.17,.85,.37,.94,.49,.01,.52,.11,.9,0,.31,.03,.23,.03,.84,.14,.22,.4,.21,.01,.01,.96,0,.08,.03,.79,.14,.08,.67,.29,.2,.54,.97,.94,.08,.5,.11,0,.01,0,.47,.71,.8,.41,.35,.32,.52,.68,0,.51,0,.31,.2,.95,.18,0,.18,.24,.82,0,.03,.01,.27,.01,.02,.07,.04,.79,.1,.39,.01,.24,0,0,.01,.5,.01,.18,.17,.02,.62,.72,1,.21,.2,.4,0,0,.03,.01,0,.32,.97,.08,.38,.39,.58,.92,.58,.63,.04,.58,.34,.83,.05,.25,.8,.5,.08,.86,.61,.79,.06,.01,.19,.98,.07,0,.18,.95,.05,.01,.01,.01,.13,.51,.52,.22,.07,1,.24,.01,.26,.14,.42,.38,0,.98,.14,.02,.03,.86,.89,.02,.44,.69,.03,.8,0,.61,.55,0,.78,.53,.27,.78,.16,.82,.04,.3,0,0,.71,.63,.01,0,.16,0,0,.01,.45,.15,.49,.79,.06,.37,.02,0,.53,.17,.88,0,.32,.06,.76,.06,.37,.04,.01,.64,.07,.99,.32,.82,0,.02,.15,.8,.27,.06,.98,.49,.14,.99,0,0,.2,.57,.41,.96,.1,.67,.01,.34,0,.08,.68,.63,.06,.23,.68,.82,.16,.95,.51,.19,.76,.16,1,.7,.57,.07,.67,.03,.76,.04,.02,.63,.49,.52,.8,.76,.27,0,.8,.85,.95,.69,.1,.69,.22,.67,.06,.05,.27,.75,.9,.2,.03,.36,0,.01,.1,.63,.5,.22,.15,.08,.44,.93,.29,.41,0,.82,0,0,.84,.15,.14,.28,.06,.42,.08,.11,.29,.12,.01,.98,.74,.81,.79,.75,.06,.75,.96,0,.26,.08,.28,.9,.04,.02,.8,.15,.96,.06,.23,.12,.91,.18,.92,.78,.35,.73,.3,.68,.18,.1,.18,.95,.06,.64,.51,.12,0,0,0,.67,.61,.89,.46,.14,.09,.03,.76,.32,.96,.3,.01,.35,.75,.4,.76,.35,.13,.8,.54,.44,0,.27,.91,.09,.04,.14,.08,.65,.84,.88,.21,.8,.71,.58,.44,.25,.69,.16,.92,.3,.05,.08,.62,.39,.86,.84,.01,.61,.08,.01,.08,.01,.46,.21,.01,0,.04,.64,0,.01,0,.83,.01,.29,.85,0,0,.45,0,.63,.14,.47,.33,.31,.22,.14,.8,.8,.21,.02,.71,.75,.64,.07,.45,.02,.46,.5,.26,.4,.44,.08,.39,.62,.18,.56,.31,.13,.8,.71,.96,.88,.34,.48,0,0,.04,.31,0,.06,.41,.32,.01,.05,.74,.97,.37,.39,.17,.38,.26,.74,.46,.53,.99,.57,.8,.55,.53,.25,.12,.71,.02,.41,.31,.02,0,.54,0,.43,.77,.95,.17,0,.01,.45,.01,.67,0,.02,.17,.03,.15,.8,.01,.01,.67,.12,.02,.15,.71,.47,.76,.82,.3,.76,.06,.71,.28,.59,.02,.32,0,0,.01,.11,.23,.56,.62,.92,.25,.99,.24,.12,.51,.52,.29,.26,.23,.08,.6,.01,.97,.26,.76,0,.45,.19,.04,.1,.3,.9,.55,.19,.28,.01,.12,.24,.2,.01,.03,.89,.99,.5,.32,.63,0,0,.07,.03,0,0,.17,.19,.83,.57,.51,.94,.68,.52,.43,.75,.08,.67,.64,.84,.27,.69,.13,.24,.53,.78,.98,.61,.81,.37,.02,.33,.42,.46,.11,.23,0,.06,0,.27,.67,.04,.1,.12,.05,.1,.66,.13,.12,.98,.63,.29,.71,.04,.98,.09,.12,.62,0,.46,.15,.09,.77,.44,.05,.14,.23,.47,.24,.12,.78,.03,.45,.98,.39,0,.09,.01,0,.01,.86,0,.01,.19,0,.59,.62,.02,.59,.73,0,.81,.44,.05,.08,.86,.23,.2,.27,0,.01,.01,.89,.07,.84,.89,.82,.01,.86,.47,.83,.29,.01,.02,.43,.13,.47,.97,.95,.69,.8,.71,.07,.22,.36,.05,.88,.44,.01,.01,.25,.24,.02,.34,.03,.58,.12,.42,.11,.16,.06,.04,.09,.34,.57,.01,0,.15,.44,.49,.01,.11,.05,.22,.51,.01,.24,0,.56,.07,.57,.78,.54,.36,.62,0,.14,.34,.35,.39,.06,.99,.01,.04,.13,0,.95,.65,.64,0,.54,.01,0,.09,.27,.06,.38,0,.16,.34,.06,.59,.17,.12,.01,.15,.72,.86,.52,0,.16,.1,.28,.02,.6,.3,.51,.76,.62,.03,.64,.12,0,.26,0,.02,0,.13,.02,.44,.07,.54,.28,.52,.11,.44,.33,.61,0,.12,.98,.79,.66,.82,.06,.26,.6,.03,.35,.88,.91,.8,.86,.82,.38,.15,.46,.98,0,.01,.06,.46,.79,.27,.86,.21,.26,0,.5,.93,.01,.06,.66,.04,.97,.01,.87,.25,.5,.77,.45,.91,.08,.04,.53,.7,.49,.94,.75,.58,.05,.34,.26,.92,0,0,.09,.72,.63,.57,.23,.42,.55,.09,.32,0,0,.03,.33,.18,.02,.65,.76,.02,.05,.23,.59,.13,.8,.79,.92,.36,.14,.02,0,.37,.29,.01,.18,.58,0,.46,.02,.51,.74,.99,.01,.28,.69,.02,.02,.01,.02,0,.76,.32,0,.46,.06,.02,.8,0,.42,.47,.11,.09,.42,.27,.8,.34,.2,.12,.38,0,.02,.58,.81,.66,0,.45,.27,.04,.56,.18,.48,.32,0,.56,.29,0,.72,.33,.28,.13,.01,.88,.65,.44,.45,.24,.82,.42,.57,.75,.46,.08,.55,.9,0,.83,.07,.5,.94,.41,.34,.85,.66,.71,.19,.73,.65,.7,.58,.03,.21,0,.8,.8,.82,.71,.71,.15,.81,.17,.25,.23,.83,.83,.01,.2,.16,.76,.25,.87,.25,.13,.55,.65,.22,.06,0,.03,.75,.07,.51,.43,.14,.72,.04,.74,.92,.51,.69,.91,.95,.02,0,.07,.81,0,.93,.67,.71,0,.54,.27,.68,.03,.07,.79,.49,.07,.97,0,0,.27,0,0,.46,.99,.03,.03,.64,.48,.89,.4,.03,.22,.01,0,.11,0,.06,.19,.06,.38,.73,.6,.11,.38,.05,.04,.93,.01,.48,.08,.17,.51,.11,.62,.17,.04,.8,0,.03,.11,.16,.51,0,.75,.06,.62,0,.09,.01,.64,.38,.14,.84,.01,.21,.36,.46,0,0,.68,.27,.51,.8,.75,.35,0,0,.68,.11,.05,.06,.43,.06,.02,.29,.48,.95,.92,.2,.34,0,0,.07,.92,.69,.01,0,.85,0,.2,.59,0,.13,.86,.08,.63,0,.02,.05,.43,.93,.03,.02,.66,.03,.64,.94,.04,.33,.12,.36,0,.31,.12,.1,.47,.01,.42,.35,.01,.32,.96,.03,.04,.57,.24,.2,0,.79,.5,.15,0,.02,.3,.78,.66,.06,0,.06,.12,.89,.01,.59,.91,0,.24,.52,.08,.77,.01,.19,.41,0,.26,.45,.4,.01,.29,.83,.89,.16,.01,.17,.02,.21,.65,.04,0,.58,.72,.27,.05,.76,1,.19,.52,.32,.05,.17,.06,.44,.84,.9,.01,.32,.18,.08,.82,.32,.11,.01,.9,.26,0,.02,.3,0,.05,.04,.11,.03,.02,.39,.16,0,.26,.43,.31,.78,.01,.13,.04,.18,.22,.1,.58,0,.6,.95,.71,.65,.46,.25,.49,.19,.66,.21,.82,0,.09,.09,.17,.85,.02,.27,.01,.06,.21,.24,0,.28,.5,.24,.53,0,.5,.08,.02,.12,.38,.03,.19,.89,.53,.08,.01,.77,.04,.15,.01,.79,.46,.42,.01,.03,.99,.01,.12,.27,.15,.21,.26,.23,.98,.11,.03,.61,.56,.18,0,.82,.11,.16,.11,.61,.93,0,.03,.62,.79,.68,.14,.01,.1,.42,.45,.78,.65,.99,.97,.64,.7,.26,.01,.05,.02,.15,.12,.23,.6,.51,.07,.02,0,.68,.39,.13,.08,.08,.02,.02,.19,0,.02,.01,.11,.01,.04,0,.18,.54,.17,.12,.4,.05,.03,.41,.89,.37,.52,.61,.97,.04,.11,.93,.07,.63,.01,.29,.09,.01,.01,.95,.71,0,.03,.46,.21,.71,.56,.48,.43,.03,.06,.12,.42,.78,.45,.86,0,.26,.01,.02,.87,0,.11,.04,.25,.08,.82,.09,.76,.99,.03,.23,.17,.88,.68,.01,.84,.23,.18,.37,.19,.07,.12,.01,.02,.11,.08,.34,.76,.08,.1,.06,.28,.01,.25,.79,.78,.03,.97,.91,.29,.87,.23,0,.82,0,.25,0,.06,.98,.23,.33,.24,.1,.28,.09,.01,.97,.21,.7,.27,.06,.02,.12,.53,.25,.03,.16,.03,.08,.56,.1,0,.37,.35,.24,.74,.91,.32,.13,.87,.11,.13,.91,.95,.13,.07,0,.16,.01,.25,.82,.19,.03,0,.42,.03,.91,.78,.99,.56,.2,0,0,.49,.07,.14,.94,.03,.72,.93,0,0,.87,.42,.15,.69,.47,.37,.06,.98,.24,.56,.01,.28,.01,.27,.02,.01,.2,.39,.7,.97,.45,.94,.98,.01,.02,.16,.79,.08,.4,.97,.03,.2,.16,.02,.87,.25,.44,.95,.32,.49,.05,.37,.22,.04,.46,.16,.14,.2,.08,.08,.69,.6,.42,0,.33,.17,.05,.01,.92,.3,.41,.92,.12,.42,.53,.28,.26,.07,.47,.17,.02,.61,.41,.51,.86,.36,.02,.05,.75,.43,.38,.72,.61,.05,.12,.93,.08,.19,.53,.4,.22,.72,.44,.26,.09,.69,0,.01,.79,.99,.32,.73,.76,.15,.44,.99,.7,.05,.24,.32,.04,.79,.57,.78,.72,.81,.82,.81,.07,.46,.44,.34,.49,.01,.03,.06,.05,.43,.45,.13,.58,.48,.17,.05,.37,.62,.73,.98,.69,0,.11,.87,.2,.04,.59,.36,.69,.22,.3,.7,.03,.82,.07,.02,.94,.59,.22,.05,.52,.07,.33,.46,.04,.26,.51,.09,.76,.76,.67,.11,.2,.25,.01,.03,.54,.86,.01,.58,.95,.79,.05,.12,.13,0,.24,.14,.26,.21,.07,.95,.69,0,0,.02,.92,.68,.48,.8,.01,.1,.82,.48,.39,.66,.76,.22,.41,.44,0,.34,0,.98,.87,.94,.62,0,.5,.84,0,.25,.06,.31,.03,.04,.56,.55,.42,.58,.09,0,.11,.01,.96,.53,.6,.14,0,.02,.02,.19,.05,.06,.77,.29,.69,.29,.71,0,.66,0,.09,.34,.65,.47,.25,.7,.78,.7,.89,.57,.9,.65,0,.81,0,.42,.06,.48,.95,.49,.03,.23,.04,.38,0,.21,.46,0,0,.06,.34,0,.56,.39,.01,.39,.13,.16,.18,.23,.51,.57,0,.33,.06,.1,.05,.65,.35,.01,.78,.57,.34,.28,.85,0,.99,.19,.9,0,.02,.23,.16,0,.69,.91,.99,.55,.39,.51,.32,.45,.19,.01,0,.26,.09,.44,.91,.19,.5,.69,.75,.49,.03,.01,.47,0,.11,.04,.18,.78,.13,.67,.04,.76,0,.33,.01,.3,.05,.65,.06,.26,.66,.18,.64,.86,.59,.07,.09,.86,.21,.85,.45,.04,.62,.51,.06,.13,.78,.04,0,.17,.01,.01,.11,.18,.71,.92,.54,.46,.38,.41,.15,.48,.47,.35,0,.64,.81,.59,.21,.78,.91,.36,.63,.93,.24,.33,.86,.96,.57,.34,.19,.02,.12,.6,.22,.64,0,.38,.99,.87,.54,0,.45,.08];export{a as pvalData};
